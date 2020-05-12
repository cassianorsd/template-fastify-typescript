import { FastifyInstance, RegisterOptions } from 'fastify';
import defaultRouter from './DefaultRoutes';

export default (server: any, opt: any, done: any) => {
  server.register(defaultRouter, { prefix: '/' });
  done();
};
