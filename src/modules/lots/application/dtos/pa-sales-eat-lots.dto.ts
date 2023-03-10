import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class PaSalesEatLotsDTO {
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  type: string;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  action: string;
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idLot: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  lotPublic: number;
}
