export class UserAlreadyExistsError extends Error {
    constructor() {
        super('User already exists!');
    }
}

export class UserNotExistsError extends Error {
    constructor() {
        super('User not exists!');
    }
}