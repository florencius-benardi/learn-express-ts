import "reflect-metadata"
import dotenv from 'dotenv';
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateUsersTable1703758438144 } from "./migrations/1703758438144-create_users_table"

dotenv.config({ path: '.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1703758438144],
    subscribers: [],
})
