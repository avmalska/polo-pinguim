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
import { CreatePinguimRequest } from '../../dto/request/create-pinguim.request';
import { Response } from 'express';
import { UpdatePinguimRequest } from '../../dto/request/update-pinguim.request';

@Controller('pinguim')
export class PinguimController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  async createPinguim(
    @Res() response: Response,
    @Body() createPinguimDto: CreatePinguimRequest,
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

  @Get('/:id')
  async getPinguim(@Res() response: Response, @Param('id') pinguimId: string) {
    const pinguimData = await this.pinguimService.getPinguim(pinguimId);
    return response.status(HttpStatus.OK).json(pinguimData);
  }

  @Delete('/:id')
  async deletePinguim(
    @Res() response: Response,
    @Param('id') pinguimId: string,
  ) {
    const deletedPinguim = await this.pinguimService.deletePinguim(pinguimId);
    return response.status(HttpStatus.OK).json(deletedPinguim);
  }

  @Put('/:id')
  async updatePinguim(
    @Res() response: Response,
    @Body() updatePinguimDto: UpdatePinguimRequest,
    @Param('id') pinguimId: string,
  ) {
    const updatedPinguim = await this.pinguimService.updatePinguim(
      pinguimId,
      updatePinguimDto,
    );
    return response.status(HttpStatus.OK).json(updatedPinguim);
  }
}
