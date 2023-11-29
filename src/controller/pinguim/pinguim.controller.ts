import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { PinguimService } from '../../service/pinguim/pinguim.service';
import { CreatePinguimDto } from '../../dto/create-pinguim.dto';
import { Response } from 'express';
import { UpdatePinguimDto } from '../../dto/update-pinguim.dto';

@Controller('pinguim')
export class PinguimController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  async createPinguim(
    @Res() response: Response,
    @Body() createPinguimDto: CreatePinguimDto,
  ) {
    const newPinguim =
      await this.pinguimService.createPinguim(createPinguimDto);

    return response.status(HttpStatus.OK).json(newPinguim);
  }

  @Get()
  async getPinguins(@Res() response: Response) {
    const pinguimData = await this.pinguimService.getPinguins();
    return response.status(HttpStatus.OK).json(pinguimData);
  }

  @Get('/:nome')
  async getPinguim(
    @Res() response: Response,
    @Param('nome') pinguimNome: string,
  ) {
    const pinguimData = await this.pinguimService.getPinguim(pinguimNome);
    return response.status(HttpStatus.OK).json(pinguimData);
  }

  @Delete('/:nome')
  async deletePinguim(
    @Res() response: Response,
    @Param('nome') pinguimNome: string,
  ) {
    const deletedPinguim = await this.pinguimService.deletePinguim(pinguimNome);
    return response.status(HttpStatus.OK).json(deletedPinguim);
  }

  @Put()
  async updatePinguim(
    @Res() response: Response,
    @Body() updatePinguimDto: UpdatePinguimDto,
  ) {
    const updatedPinguim =
      await this.pinguimService.updatePinguim(updatePinguimDto);
    return response.status(HttpStatus.OK).json(updatedPinguim);
  }
}
