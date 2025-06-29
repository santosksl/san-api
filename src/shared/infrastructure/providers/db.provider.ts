import mariadb, { Pool, PoolConfig, PoolConnection } from "mariadb";

const AcessFromDatabase: PoolConfig = {
    user: process.env.MARIADB_USER,
    database: process.env.MARIADB_DATABASE,
    password: process.env.MARIADB_PASSWORD,
    connectionLimit: 5
}

export class DatabaseProvider {
    static pool: Pool

    constructor () {
        DatabaseProvider.pool = mariadb.createPool(AcessFromDatabase);

        const connection = DatabaseProvider.pool.getConnection();

        if (!connection) {
            console.log(`❌ Connection MariaDB Pool not established`);
            throw new Error("❌ Connection MariaDB Pool not established");
        }

        console.log(`✔ Connection MariaDB Pool established`);
        return DatabaseProvider.pool;
    }

    public async getConnection(): Promise<PoolConnection> {
        if (!DatabaseProvider.pool) {
            console.log(`❌ Connection MariaDB Pool not established`);
            throw new Error("❌ Connection MariaDB Pool not established");
        }

        const connection = await DatabaseProvider.pool.getConnection();
        return connection;
    }
}

export const databaseInstance = new DatabaseProvider();
export const databaseConnection = databaseInstance.getConnection();