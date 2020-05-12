import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

const HelloRoute = (req: FastifyRequest, res: FastifyReply<any>) => {
  res.send({ Hello: 'World' });
};

const HelloV2Route = (req: FastifyRequest, res: FastifyReply<any>) => {
  res.send({ Hello: 'WorldV2' });
};
export default (server: FastifyInstance, opts: any, done: any) => {
  server.get('/', HelloRoute);
  server.get('/v2', HelloV2Route);
  done();
};
