import { databaseConnection } from "../../../../shared/infrastructure/providers/db.provider";
import { hashProvider } from "../../../../shared/infrastructure/providers/hash.provider";
import { IUserDTO, IUserModelDTO } from "../dtos/user.dto";

export interface IUserRepository {
    insert({ username, email, password }: IUserModelDTO): Promise<IUserDTO>;
}


export class UserRepository implements IUserRepository {
    async insert({
        username,
        email,
        password,
        createdAt,
    }: IUserModelDTO): Promise<IUserDTO> {
        const passwordHashed = await hashProvider.generateHash(password);

        const result = await (await databaseConnection).query(
            'INSERT INTO users (username, email, password, createdAt) VALUES (?, ?, ?, ?)',
            [username, email, passwordHashed, createdAt || new Date()],
        );

        const user = {
            id: result.insertId,
            username,
            email,
            password: passwordHashed,
            createdAt: createdAt || new Date(),
        };

        return { user };
    }
}