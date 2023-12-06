import { PinguimResponse } from '../dto/response/pinguim.response';
import { CreatePinguimRequest } from '../dto/request/create-pinguim.request';
import { UpdatePinguimRequest } from '../dto/request/update-pinguim.request';

export interface PinguimRepository {
  create(pinguim: CreatePinguimRequest): Promise<PinguimResponse>;
  findAll(): Promise<PinguimResponse[]>;
  findOne(id: string): Promise<PinguimResponse>;
  delete(id: string): Promise<PinguimResponse>;
  update(id: string, pinguim: UpdatePinguimRequest): Promise<PinguimResponse>;
}
