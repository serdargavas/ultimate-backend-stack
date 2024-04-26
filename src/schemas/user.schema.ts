import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Credential } from './credential.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Credential' })
  credential: Credential;
}

export const UserSchema = SchemaFactory.createForClass(User);
