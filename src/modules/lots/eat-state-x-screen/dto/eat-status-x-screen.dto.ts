import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsString, Length, IsNumber, Max, } from 'class-validator';
import { Type } from 'class-transformer';

export class EatStatusXScreenDto {

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @Max(9999999999, { message: "El maximo valor de id_com_estx_pan debe ser 9999999999" })
  @IsOptional()
  @ApiProperty({ title: "id_com_estx_pan", example: "Dato de tipo numérico", required: false })
  id: number;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 4, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "estatus", example: "Dato de tipo texto", required: false })
  status: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 100, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "descripcion", example: "Dato de tipo texto", required: false })
  description: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "cve_pantalla", example: "Dato de tipo texto", required: false })
  cveScreen: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 4, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "estatus_final", example: "Dato de tipo texto", required: false })
  statusFinal: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 30, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "accion", example: "Dato de tipo texto", required: false })
  action: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 4, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "estatus_nuevo", example: "Dato de tipo texto", required: false })
  statusNew: string;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @Max(9999999999, { message: "El maximo valor de no_registro debe ser 9999999999" })
  @IsOptional()
  @ApiProperty({ title: "no_registro", example: "Dato de tipo numérico", required: false })
  numberRecord: number;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 5, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "identificador", example: "Dato de tipo texto", required: false })
  identifier: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 15, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "tipo", example: "Dato de tipo texto", required: false })
  guy: string;

  @Type(() => String)
  @IsString({ message: Message.STRING("$property") })
  @Length(1, 15, { message: Message.LENGTH("$property", "$constraint1 $constraint2") })
  @IsOptional()
  @ApiProperty({ title: "proceso", example: "Dato de tipo texto", required: false })
  process: string;

}

