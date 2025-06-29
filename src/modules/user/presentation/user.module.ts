import { FastifyInstance } from "fastify";
import { userController } from "./user.controller";

export async function userRoutes(fastify: FastifyInstance) {
    fastify.post("/register", async (request, reply) => {
        await userController.registerUser(request, reply);
    })
}