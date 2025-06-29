import bcrypt from "bcryptjs";

interface IHashProvider {
    generateHash(payload: string): Promise<string>;
    compareHash(payload: string, hash: string): Promise<boolean>;
}

export class HashProvider implements IHashProvider {
    async compareHash(payload: string, hash: string): Promise<boolean> {
        return bcrypt.compare(payload, hash);
    }

    async generateHash(payload: string) {
        return bcrypt.hash(payload, 6);
    }
}

export const hashProvider = new HashProvider();