import fastify from 'fastify';

const app = fastify({
  logger: true,
});

app.get('/', (req, res) => {
  res.send({ teste: 'fdsfd' });
});

export default app;
