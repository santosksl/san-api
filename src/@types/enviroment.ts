declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HTTP_PORT: number;

            MARIADB_USER: string;
            MARIADB_DATABASE: string;
            MARIADB_PASSWORD: string;
        }
    }
}