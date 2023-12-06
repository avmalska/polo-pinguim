import { PinguimRepository } from './pinguim.repository';
import { CreatePinguimRequest } from '../dto/request/create-pinguim.request';
import { PinguimResponse } from '../dto/response/pinguim.response';
import { Promise } from 'mongoose';
import { UpdatePinguimRequest } from '../dto/request/update-pinguim.request';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Pinguim } from '../entity/pinguim.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PinguimPostgresRepositoryImpl implements PinguimRepository {
  constructor(
    @InjectRepository(Pinguim)
    private readonly pinguimRepository: Repository<Pinguim>,
  ) {}

  create(pinguim: CreatePinguimRequest): Promise<PinguimResponse> {
    return this.pinguimRepository.save(pinguim);
  }

  async delete(id: string): Promise<PinguimResponse> {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      await this.pinguimRepository.delete({ id: id });
      return pinguim;
    }
  }

  async findAll(): Promise<PinguimResponse[]> {
    return await this.pinguimRepository.find();
  }

  async findOne(id: string): Promise<PinguimResponse> {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return pinguim;
    }
  }

  async update(
    id: string,
    newPinguim: UpdatePinguimRequest,
  ): Promise<PinguimResponse> {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return await this.pinguimRepository.save({
        id: id,
        ...newPinguim,
      });
    }
  }
}
