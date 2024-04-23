import express, { Express } from 'express';
import { GatewayServer } from './server';

class Application {
  initialize(): void {
    const app: Express = express();
    const server: GatewayServer = new GatewayServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();