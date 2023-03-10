import { IsArray, IsInt, IsNumber, IsOptional } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class GetLotAfDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pCon: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  lotPublic: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idLot: number;

  @IsArray({ message: Message.STRING('$property') })
  @IsOptional()
  noBien: [];
}
