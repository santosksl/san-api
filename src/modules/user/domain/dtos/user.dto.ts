export interface IUserModelDTO {
    id?: number;
    createdAt?: Date;
    username: string | null;
    email: string;
    password: string;
}

export interface IUserDTO {
    user: IUserModelDTO;
}

export interface IUserEmailDTO {
    email: string;
}
