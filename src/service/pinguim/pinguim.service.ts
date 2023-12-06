import { Injectable } from '@nestjs/common';
import { CreatePinguimRequest } from '../../dto/request/create-pinguim.request';
import { UpdatePinguimRequest } from '../../dto/request/update-pinguim.request';
import { PinguimMongoRepositoryImpl } from '../../repository/pinguim-mongo.repository-impl';
import { PinguimResponse } from '../../dto/response/pinguim.response';
import { PinguimPostgresRepositoryImpl } from '../../repository/pinguim-postgres.repository-impl';

@Injectable()
export class PinguimService {
  constructor(
    private readonly pinguimRepository: PinguimPostgresRepositoryImpl,
  ) {}

  async createPinguim(
    createPinguimRequest: CreatePinguimRequest,
  ): Promise<PinguimResponse> {
    return this.pinguimRepository.create(createPinguimRequest);
  }

  async getPinguins(): Promise<PinguimResponse[]> {
    return this.pinguimRepository.findAll();
  }

  async getPinguim(pinguimId: string): Promise<PinguimResponse> {
    return this.pinguimRepository.findOne(pinguimId);
  }

  async deletePinguim(pinguimId: string): Promise<PinguimResponse> {
    return this.pinguimRepository.delete(pinguimId);
  }

  async updatePinguim(
    pinguimId: string,
    updatePinguimDto: UpdatePinguimRequest,
  ): Promise<PinguimResponse> {
    return this.pinguimRepository.update(pinguimId, updatePinguimDto);
  }
}
