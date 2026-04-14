const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { createServer } = require('../server.js');

async function withServer(runTest) {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'hk-aed-waittime-'));
    const counterFile = path.join(tempDir, 'page-views.txt');
    const server = createServer({
        baseDir: path.resolve(__dirname, '..'),
        counterFile,
        env: {}
    });

    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));

    try {
        const { port } = server.address();
        await runTest(`http://127.0.0.1:${port}`, counterFile);
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => (error ? reject(error) : resolve()));
        });
        fs.rmSync(tempDir, { recursive: true, force: true });
    }
}

test('root route serves the main HTML document', async () => {
    await withServer(async (baseUrl) => {
        const response = await fetch(`${baseUrl}/`);
        const html = await response.text();

        assert.equal(response.status, 200);
        assert.match(response.headers.get('content-type') || '', /text\/html/);
        assert.match(html, /急症室等候時間/);
    });
});

test('server blocks repo internals and sensitive files', async () => {
    await withServer(async (baseUrl) => {
        const gitResponse = await fetch(`${baseUrl}/.git/HEAD`);
        const packageResponse = await fetch(`${baseUrl}/package.json`);

        assert.equal(gitResponse.status, 403);
        assert.equal(packageResponse.status, 404);
    });
});

test('missing assets return 404 instead of index.html', async () => {
    await withServer(async (baseUrl) => {
        const response = await fetch(`${baseUrl}/missing-file.js`);
        const body = await response.text();

        assert.equal(response.status, 404);
        assert.doesNotMatch(body, /<!DOCTYPE html>/);
    });
});

test('pageview API increments and returns the current count', async () => {
    await withServer(async (baseUrl, counterFile) => {
        const hitOne = await fetch(`${baseUrl}/api/pageviews/hit`);
        const hitTwo = await fetch(`${baseUrl}/api/pageviews/hit`);
        const current = await fetch(`${baseUrl}/api/pageviews/get`);

        assert.deepEqual(await hitOne.json(), { value: 1 });
        assert.deepEqual(await hitTwo.json(), { value: 2 });
        assert.deepEqual(await current.json(), { value: 2 });
        assert.equal(fs.readFileSync(counterFile, 'utf8').trim(), '2');
    });
});
