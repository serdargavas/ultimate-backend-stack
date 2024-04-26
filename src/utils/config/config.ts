import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export const PORT = parseInt(process.env.PORT, 10) || 4000;

export const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;
export const MONGODB_DB_NAME = process.env.MONGO_INITDB_DATABASE;
export const MONGODB_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
export const MONGODB_PASS = process.env.MONGO_INITDB_ROOT_PASSWORD;
