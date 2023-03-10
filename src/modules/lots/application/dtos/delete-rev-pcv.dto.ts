import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class DeteleteRevPcvDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pIdevento: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pNoBien: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  pTpEvento: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pLote: number;
}
