import { PinguimResponse } from '../dto/response/pinguim.response';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PinguimInterface } from '../interface/pinguim.interface';
import { PinguimMapper } from '../mapper/pinguim.mapper';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PinguimRepository } from './pinguim.repository';
import { CreatePinguimRequest } from '../dto/request/create-pinguim.request';
import { UpdatePinguimRequest } from '../dto/request/update-pinguim.request';

@Injectable()
export class PinguimMongoRepositoryImpl implements PinguimRepository {
  constructor(
    @InjectModel('Pinguim') private pinguimModel: Model<PinguimInterface>,
    private readonly pinguimMapper: PinguimMapper,
  ) {}

  async findAll(): Promise<PinguimResponse[]> {
    return await this.pinguimModel
      .find()
      .exec()
      .then((pinguins) => {
        return pinguins.map((pinguim) => {
          return this.pinguimMapper.mongoToResponse(pinguim);
        });
      });
  }

  async findOne(id: string): Promise<PinguimResponse> {
    const expectedPinguim = await this.pinguimModel.findById(id).exec();

    if (!expectedPinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return this.pinguimMapper.mongoToResponse(expectedPinguim);
    }
  }

  async create(pinguim: CreatePinguimRequest): Promise<PinguimResponse> {
    const newPinguim = await new this.pinguimModel(pinguim).save();
    return this.pinguimMapper.mongoToResponse(newPinguim);
  }

  async delete(id: string): Promise<PinguimResponse> {
    const deletedPinguim = await this.pinguimModel.findByIdAndDelete(id).exec();

    if (!deletedPinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return this.pinguimMapper.mongoToResponse(deletedPinguim);
    }
  }

  async update(
    id: string,
    pinguimToUpdate: UpdatePinguimRequest,
  ): Promise<PinguimResponse> {
    const updatedPinguim = await this.pinguimModel
      .findByIdAndUpdate(id, pinguimToUpdate, {
        new: true,
      })
      .exec();

    if (!updatedPinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return this.pinguimMapper.mongoToResponse(updatedPinguim);
    }
  }
}
