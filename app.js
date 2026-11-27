const express = require('express');
const app = express();

app.get('/', (req, res) => res.type('text').send('Hello World!'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  const port = Number(process.env.PORT || 4000);
  app.listen(port, '0.0.0.0', () => console.log(`Listening on 0.0.0.0:${port}`));
}
module.exports = app;
