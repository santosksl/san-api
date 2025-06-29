import { databaseConnection } from "../../../../shared/infrastructure/providers/db.provider";
import { hashProvider } from "../../../../shared/infrastructure/providers/hash.provider";
import { IUserDTO, IUserEmailDTO, IUserModelDTO } from "../dtos/user.dto";

export interface IUserRepository {
    insert({ username, email, password }: IUserModelDTO): Promise<IUserDTO>;
    findByEmail(email: string): Promise<IUserEmailDTO | null>;
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

    async findByEmail(email: string): Promise<IUserEmailDTO | null> {
        const rows = await (await databaseConnection).query(
            'SELECT email FROM users WHERE email = ?',
            [email],
        );
        return rows[0] || null;
    }

}