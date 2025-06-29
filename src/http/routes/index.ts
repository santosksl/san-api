import { FastifyInstance } from "fastify";
import { userRoutes } from "../../modules/user/presentation/user.module";

export class RoutesHandler {
    static async RegisterRoutes(router: FastifyInstance) {
        router.register(userRoutes, { prefix: "/user" })
    }
}