import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class PaRunOperDTO {
  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  baseValue: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  finalPrice: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  referenceG: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  referenceL: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  aIva: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field1: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field2: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field3: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field4: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field5: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field6: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field7: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field8: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  field9: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idLot: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pCon: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  goodNumber: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idGoodInLot: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idStatusVta: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  baseIva: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  lotPublic: number;
}
