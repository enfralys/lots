import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class EatPayefDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idPayment: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  reference: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  movementNumber: number;

  @IsDate({ message: Message.STRING('$property') })
  @IsOptional()
  date: Date;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amount: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  bankKey: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  code: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idLot: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  validInSystem: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  noTime: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  description: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  type: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  incomeOrderId: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  result: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  branch: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  paymentReturnId: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  conciliated: string;

  @IsDate({ message: Message.STRING('$property') })
  @IsOptional()
  registerDate: Date;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  originalReference: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  account: string;

  @IsDate({ message: Message.STRING('$property') })
  @IsOptional()
  oiDate: Date;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  appliedTo: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  clientId: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  folioOi: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  indicator: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  accountStatusCode: number;

  @IsDate({ message: Message.STRING('$property') })
  @IsOptional()
  affectedDate: Date;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  registerNo: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  satTypeId: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  expenseId: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  paymentRequestId: number;
}
