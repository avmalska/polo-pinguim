import { Document } from 'mongoose';

export interface PinguimInterface extends Document {
  id: number;
  nome: string;
  idade: number;
}
