import { IsNumber, IsOptional } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class EatWellAfterTableDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idLot: number;
}
