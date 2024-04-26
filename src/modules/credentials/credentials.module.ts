import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialSchema } from 'src/schemas/credential.schema';
// import { CredentialService } from './credential.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Credential.name, schema: CredentialSchema },
    ]),
  ],
  providers: [],
})
export class CredentialModule {}
