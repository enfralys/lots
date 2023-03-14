import { ApiProperty } from '@nestjs/swagger';
    import { Message } from 'sigebi-lib-common';
    import { IsOptional, IsNumber, Max, IsString, Length, IsDate,  } from 'class-validator';
    import { Type } from 'class-transformer';
    
    export class TmpLotsEatDto {
      
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de id_lote debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "id_lote", example: "Dato de tipo numérico", required: false })
        idLot: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 4, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "id_estatusvta", example: "Dato de tipo texto", required: false })
        idsalesstatus: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de id_evento debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "id_evento", example: "Dato de tipo numérico", required: false })
        idEvent: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de lote_publico debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "lote_publico", example: "Dato de tipo numérico", required: false })
        batchPublic: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 1250, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "descripcion", example: "Dato de tipo texto", required: false })
        description: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(999999999999999999999999999999999, { message: "El maximo valor de valor_base debe ser 999999999999999999999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "valor_base", example: "Dato de tipo numérico", required: false })
        worthBase: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de id_cliente debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "id_cliente", example: "Dato de tipo numérico", required: false })
        idCustomer: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99999999999, { message: "El maximo valor de precio_garantia debe ser 99999999999" })
        @IsOptional()
        @ApiProperty({ title: "precio_garantia", example: "Dato de tipo numérico", required: false })
        priceWarranty: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de cubrelotes debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "cubrelotes", example: "Dato de tipo numérico", required: false })
        coverlots: number;
        
      @Type(() => Date)
        @IsDate({ message: Message.IsDate('$property') })
        @IsOptional()
        @ApiProperty({ title: 'fecha_entrega', example: 'Dato de tipo fecha' })
        dateDelivery: Date;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(999999999999999, { message: "El maximo valor de precio_final debe ser 999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "precio_final", example: "Dato de tipo numérico", required: false })
        priceFinal: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99999999999, { message: "El maximo valor de iva_lote debe ser 99999999999" })
        @IsOptional()
        @ApiProperty({ title: "iva_lote", example: "Dato de tipo numérico", required: false })
        vatBatch: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(999999999999999, { message: "El maximo valor de monto_app_iva debe ser 999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "monto_app_iva", example: "Dato de tipo numérico", required: false })
        amountappsvat: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(999999999999999, { message: "El maximo valor de anticipo debe ser 999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "anticipo", example: "Dato de tipo numérico", required: false })
        advance: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(999999999999999, { message: "El maximo valor de monto_noapp_iva debe ser 999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "monto_noapp_iva", example: "Dato de tipo numérico", required: false })
        amountnoappvat: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 25, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "linea_captura", example: "Dato de tipo texto", required: false })
        lineCapture: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de estatus_sist debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "estatus_sist", example: "Dato de tipo numérico", required: false })
        statusSystem: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de id_sist debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "id_sist", example: "Dato de tipo numérico", required: false })
        idSystem: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 1, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "eschatarra", example: "Dato de tipo texto", required: false })
        junk: string;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 200, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "dato_fisc_mand", example: "Dato de tipo texto", required: false })
        facttaxsent: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de no_delegacion debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "no_delegacion", example: "Dato de tipo numérico", required: false })
        numberDelegation: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 50, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "coordinacion_reg", example: "Dato de tipo texto", required: false })
        coordinationreg: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de no_transferente debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "no_transferente", example: "Dato de tipo numérico", required: false })
        numberTransferee: number;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 150, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "desc_transferente", example: "Dato de tipo texto", required: false })
        downloadTransferee: string;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 5, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "direccion", example: "Dato de tipo texto", required: false })
        address: string;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 1, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "act_lote", example: "Dato de tipo texto", required: false })
        actBatch: string;
        
    }
    
    