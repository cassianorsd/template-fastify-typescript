import fastify, { FastifyInstance } from 'fastify';
import routes from './routes';

const app: FastifyInstance = fastify({
  logger: true,
});

app.register(routes);

export default app;
