import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePinguimDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly nome: string;

  @IsNotEmpty()
  @IsNumber()
  readonly idade: number;
}
