import { FastifyReply } from "fastify";
import { UserAlreadyExistsError, UserNotExistsError } from "../../../../modules/user/domain/errors";

export function errorHandler(error: unknown, reply: FastifyReply) {
    if (error instanceof UserNotExistsError) {
        reply.status(409).send({ message: error.message });
    }

    if (error instanceof UserAlreadyExistsError) {
        reply.status(409).send({ message: error.message });
    }
}