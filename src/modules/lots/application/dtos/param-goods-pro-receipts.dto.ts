import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    Length,
} from "class-validator";

import { Message } from 'sigebi-lib-common';

export class ParamGoodsProgrammingReceiptsDTO {

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_TIPO_OPERACION", example: "Dato de tipo texto", required: false })
    P_TIPO_OPERACION: string | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_MOTIVOCAN", example: "Dato de tipo numérico", required: false })
    P_MOTIVOCAN: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_CANTIDAD_SAE", example: "Dato de tipo numérico", required: false })
    P_CANTIDAD_SAE: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_DESTINO_SAE", example: "Dato de tipo numérico", required: false })
    P_DESTINO_SAE: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ESTADO_CONSERVACION_SAE", example: "Dato de tipo numérico", required: false })
    P_ESTADO_CONSERVACION_SAE: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ESTADO_FISICO_SAE", example: "Dato de tipo numérico", required: false })
    P_ESTADO_FISICO_SAE: number | null;

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_UNIDAD_MEDIDA_SAE", example: "Dato de tipo texto", required: false })
    P_UNIDAD_MEDIDA_SAE: string | null;

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_DESCRIPCION_BIEN_SAE", example: "Dato de tipo texto", required: false })
    P_DESCRIPCION_BIEN_SAE: string | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_BIEN", example: "Dato de tipo numérico", required: false })
    P_ID_BIEN: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_PROGRAMACION", example: "Dato de tipo numérico", required: false })
    P_ID_PROGRAMACION: number | null;

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_USUARIO_CREACION", example: "Dato de tipo texto", required: false })
    P_USUARIO_CREACION: string | null;

}

