import { PinguimInterface } from '../interface/pinguim.interface';
import { PinguimResponse } from '../dto/response/pinguim.response';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PinguimMapper {
  mongoToResponse(pinguimInterface: PinguimInterface): PinguimResponse {
    return {
      id: pinguimInterface._id,
      nome: pinguimInterface.nome,
      idade: pinguimInterface.idade,
    };
  }
}
