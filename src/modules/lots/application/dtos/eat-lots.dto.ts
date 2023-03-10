import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Message } from 'sigebi-lib-common';

export class EatLostDTO {
  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idLot: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idStatusVta: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idEvent: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  lotPublic: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  baseValue: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  noTransferee: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  idClient: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  priceValuationRef: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  priceGuarantee: number;

  @IsDate({ message: Message.STRING('$property') })
  @IsOptional()
  deliverDate: Date;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  finalPrice: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  reference: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  referential: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  accumulated: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  validSystem: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  ivaLot: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amountAppIva: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amountNoAppIva: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  porcAppIva: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  porcNoAppIva: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  coordinationReg: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  coordinatorReg: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  datoFiscMand: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  location: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  advance: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amountWithoutIva: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  noJobnNotifies: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  printNotifies: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  idStatusvtant: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  numEstate: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  exceedsShortage: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  isAssigned: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  isScrap: string;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  requests: string;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amountRetained: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  noDelegation: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  lotOrigin: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  coversLots: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  palette: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  assignedGuarantee: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  amountLiq: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  phase: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  nopartialities: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  pointsPercentage: number;

  @IsNumber({}, { message: Message.STRING('$property') })
  @IsOptional()
  advancePercentage: number;

  @IsString({ message: Message.STRING('$property') })
  @IsOptional()
  aIva: string;
}
