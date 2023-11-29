import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pinguim {
  @Prop()
  id: number;

  @Prop()
  nome: string;

  @Prop()
  idade: number;
}
export const PinguimSchema = SchemaFactory.createForClass(Pinguim);
