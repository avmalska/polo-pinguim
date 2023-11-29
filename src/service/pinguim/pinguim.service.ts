import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePinguimDto } from '../../dto/create-pinguim.dto';
import { PinguimInterface } from '../../interface/pinguim.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePinguimDto } from '../../dto/update-pinguim.dto';

@Injectable()
export class PinguimService {
  constructor(
    @InjectModel('Pinguim') private pinguimModel: Model<PinguimInterface>,
  ) {}

  async createPinguim(
    createPinguimDto: CreatePinguimDto,
  ): Promise<PinguimInterface> {
    const newPinguim = new this.pinguimModel(createPinguimDto);
    return newPinguim.save();
  }

  async getPinguins(): Promise<PinguimInterface[]> {
    return this.pinguimModel.find();
  }

  async getPinguim(pinguimNome: string): Promise<PinguimInterface> {
    const expectedPinguim = await this.pinguimModel
      .findOne({ nome: pinguimNome })
      .exec();

    if (!expectedPinguim) {
      throw new NotFoundException(`Pinguim com nome ${pinguimNome} não existe`);
    } else {
      return expectedPinguim;
    }
  }

  async deletePinguim(pinguimNome: string): Promise<PinguimInterface> {
    const deletedPinguim = await this.pinguimModel
      .findOneAndDelete({ nome: pinguimNome })
      .exec();

    if (!deletedPinguim) {
      throw new NotFoundException(`Pinguim com nome ${pinguimNome} não existe`);
    } else {
      return deletedPinguim;
    }
  }

  async updatePinguim(
    updatePinguimDto: UpdatePinguimDto,
  ): Promise<PinguimInterface> {
    const updatedPinguim = await this.pinguimModel
      .findOneAndUpdate({ nome: updatePinguimDto.nome }, updatePinguimDto, {
        new: true,
      })
      .exec();

    if (!updatedPinguim) {
      throw new NotFoundException(
        `Pinguim com nome ${updatePinguimDto.nome} não existe`,
      );
    } else {
      return updatedPinguim;
    }
  }
}
