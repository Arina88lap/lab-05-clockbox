const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('./app');

test('home page and health endpoint', async () => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const home = await fetch(base);
    assert.equal(home.status, 200);
    assert.equal(await home.text(), 'Hello World!');
    const health = await fetch(`${base}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { status: 'ok' });
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});
