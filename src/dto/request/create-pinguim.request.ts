import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePinguimRequest {
  @ApiProperty({ example: 'Andrey' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly nome: string;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  @IsNumber()
  readonly idade: number;
}
