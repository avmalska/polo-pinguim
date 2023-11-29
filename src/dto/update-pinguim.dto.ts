import { PartialType } from '@nestjs/mapped-types';
import { CreatePinguimDto } from './create-pinguim.dto';

export class UpdatePinguimDto extends PartialType(CreatePinguimDto) {}
