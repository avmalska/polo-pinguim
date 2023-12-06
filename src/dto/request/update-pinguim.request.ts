import { PartialType } from '@nestjs/mapped-types';
import { CreatePinguimRequest } from './create-pinguim.request';

export class UpdatePinguimRequest extends PartialType(CreatePinguimRequest) {}
