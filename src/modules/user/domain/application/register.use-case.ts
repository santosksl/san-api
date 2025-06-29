import { IUserModelDTO } from '../../domain/dtos/user.dto';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserAlreadyExistsError } from '../errors';

export class RegisterUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute({ username, email, password }: IUserModelDTO) {
        const alreadyExistsEmail = await this.userRepository.findByEmail(email);

        if (alreadyExistsEmail) {
            throw new UserAlreadyExistsError();
        }

        await this.userRepository.insert({ username, email, password });
    }
}