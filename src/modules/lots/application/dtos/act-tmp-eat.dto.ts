import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsString } from "class-validator"
import { Message } from "sigebi-lib-common"

export class ActTmpEatDTO{
    @Type(() => Number)
    @IsOptional()
    @IsNumber({},{ message: Message.STRING("$property") })
    pEvent:number

    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING("$property") })
    pDirec:string
}