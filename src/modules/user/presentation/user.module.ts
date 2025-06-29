import { FastifyInstance } from "fastify";

export async function userRoutes(fastify: FastifyInstance) {
    fastify.get("/", async (require, reply) => {
        reply.send({ message: "Hello World" });
    })
}