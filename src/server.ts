import { AppModule } from "./app";

export class SanConnectServer {
    static startServer() {
        const app = new AppModule(process.env.HTTP_PORT);
        app.initApplication();
    }
}

SanConnectServer.startServer();