// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CreateCredentialDto } from '../dto/create-credential.dto';

// @Injectable()
// export class CredentialRepository {
//   constructor(
//     @InjectModel(Credential.name) private credentialModel: Model<Credential>,
//   ) {}

//   async createCredential(dto: CreateCredentialDto): Promise<Credential> {
//     const credental = new this.credentialModel(dto);
//     return credental.save();
//   }
// }
