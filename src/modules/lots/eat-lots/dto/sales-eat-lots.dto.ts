import { IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class SalesEatLotsDTO {
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  pAction: number;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idEvent;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idLot;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  lotPublic;
}
