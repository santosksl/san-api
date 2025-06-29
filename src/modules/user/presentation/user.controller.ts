import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUserUseCase } from "../domain/application/register.use-case";
import { UserRepository } from "../domain/repositories/user.repository";
import { registerUserSchema } from "../infrastructure/validations/register.validation";
import { errorHandler } from "../../../shared/infrastructure/handlers/errors";

const userRepository = new UserRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);

export class UserController {
    async registerUser(request: FastifyRequest, reply: FastifyReply) {
        const { username, email, password } = registerUserSchema.parse(request.body);

        try {
            await registerUserUseCase.execute({ username, email, password });
            return reply.status(201).send({ message: "User created successfully" })
        } catch(err) {
            errorHandler(err, reply);
        }
    }
}

export const userController = new UserController();