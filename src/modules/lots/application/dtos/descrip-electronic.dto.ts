import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class DescripElectronicDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  rfc: string;
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  receiptDescription: string;
}
