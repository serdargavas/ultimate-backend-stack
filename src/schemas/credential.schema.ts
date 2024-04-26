import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type CredentialDocument = HydratedDocument<Credential>;

@Schema()
export class Credential {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passworld: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const CredentialSchema = SchemaFactory.createForClass(Credential);
