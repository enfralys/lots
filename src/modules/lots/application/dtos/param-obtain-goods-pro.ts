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

export class ParamObtainGoodsProgrammingDTO {

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_PROG_ENTREGA", example: "Dato de tipo numérico", required: false })
    P_ID_PROG_ENTREGA: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_TIPO_EVENTO", example: "Dato de tipo numérico", required: false })
    P_TIPO_EVENTO: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_NO_ENT", example: "Dato de tipo numérico", required: false })
    P_NO_ENT: number | null;

}

