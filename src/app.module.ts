import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MONGODB_CONNECTION_URI,
  MONGODB_DB_NAME,
  MONGODB_PASS,
  MONGODB_USER,
} from './utils/config/config';
// import { CredentialModule } from './modules/credentials/credentials.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION_URI, {
      dbName: MONGODB_DB_NAME,
      auth: {
        username: MONGODB_USER,
        password: MONGODB_PASS,
      },
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          Logger.log('Succesfully connected to mongodb');
        });
        connection.on('disconnected', () => {
          Logger.log('Disconnected from mongodb');
        });

        connection._events.connected();
        return connection;
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
