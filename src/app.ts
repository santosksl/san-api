import fastify, { FastifyInstance } from "fastify";
import { RoutesHandler } from "./http/routes";

export class AppModule {
    constructor (
        private port: number,
        private app: FastifyInstance = fastify()
    ) {}

    public async initApplication() {
        await RoutesHandler.RegisterRoutes(this.app);
        
        this.app.listen({
            host: "0.0.0.0",
            port: this.port
        }).then((address) => console.log(`🚀 HTTP Server Running!\n🎯 Address: ${address}`))
    }
}