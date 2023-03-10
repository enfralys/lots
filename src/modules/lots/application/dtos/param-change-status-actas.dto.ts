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

export class ParamChangeStatusActasDTO {

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_NOACTA", example: "Dato de tipo numérico", required: false })
    P_NOACTA: number | null;

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_PANTALLA", example: "Dato de tipo texto", required: false })
    P_PANTALLA: string | null;

    @Type(() => Date)
    @IsOptional()
    @IsDate({
        message: Message.IsDate("$property"),
    })
    @ApiProperty({ title: "P_FECHA_RE_FIS", example: "Dato de tipo fecha", required: false })
    P_FECHA_RE_FIS: Date | null;

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    @Length(1, 1000, {
        message: Message.LENGTH("$property", "$constraint1 $constraint2"),
    })
    @ApiProperty({ title: "P_TIPO_ACTA", example: "Dato de tipo texto", required: false })
    P_TIPO_ACTA: string | null;



}

