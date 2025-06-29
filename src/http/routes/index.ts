import { FastifyInstance } from "fastify";
import { userRoutes } from "../../modules/user/presentation/user.module";
import { databaseConnection } from "../../shared/infrastructure/providers/db.provider";

export class RoutesHandler {
    static async RegisterRoutes(router: FastifyInstance) {
        router.register(userRoutes, { prefix: "/user" })
    }
}