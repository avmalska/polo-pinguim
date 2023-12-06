import { Document } from 'mongoose';

export interface PinguimInterface extends Document {
  id: string;
  nome: string;
  idade: number;
}
