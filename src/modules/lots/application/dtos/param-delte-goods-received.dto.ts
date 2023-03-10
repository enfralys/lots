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

export class ParamDeleteGoodsReceivedDTO {

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
    @ApiProperty({ title: "P_ID_RECIBO", example: "Dato de tipo numérico", required: false })
    P_ID_RECIBO: number | null;

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

}

