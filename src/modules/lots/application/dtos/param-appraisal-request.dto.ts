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

export class ParamAppraisalRequestDTO {

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_PROGRAMACION", example: "Identificador de programacion", required: false })
    programmingId: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_BIENES", example: "Identificador de bienes", required: false })
    goodId: number | null;

    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER("$property") })
    @ApiProperty({ title: "P_ID_OFICIO", example: "Identificador de oficio", required: false })
    officeId: number | null;

}

