import { BaseController, BaseService } from 'sigebi-lib-common';
import { EatLotsEntity } from '../../infrastructure/eat-lots.entity';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Controller,
} from '@nestjs/common';
import { EatLostDTO } from '../../application/dtos/eat-lots.dto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { EatLotsService } from '../services/eat-lots.service';

@ApiCreatedResponse()
@ApiTags('crud eatLots')
@Controller('eat-lots')
export class EatLotsController extends BaseController<EatLotsEntity> {
  constructor(private readonly service: EatLotsService) {
    super();
  }
  getService(): BaseService<EatLotsEntity> {
    return this.service;
  }
  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [EatLostDTO],
  })
  @ApiQuery({
    name: 'page',
    description: 'Número de página',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Limite de elementos',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'search',
    description: 'Texto a buscar',
    type: String,
    required: false,
  })
  @Get()
  async findAllRegisters(@Paginate() query: PaginateQuery) {
    return await this.service.findAllRegisters(query);
  }

  @ApiOperation({ summary: 'Busca por su identificador' })
  @ApiParam({
    name: 'idLot',
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: EatLostDTO,
  })
  @Get(':idLot')
  async findOneRegister(@Param('idLot') idLot: number) {
    return await this.service.findOneRegisterByIds(idLot);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: EatLostDTO })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: EatLostDTO,
  })
  @Post()
  async createNewRegister(@Body() dto: EatLostDTO) {
    const value = await this.findOneRegister(dto.idLot);
    return value.count > 0
      ? {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['La clave ya fue registrada'],
        }
      : this.getService().create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: EatLostDTO })
  @ApiParam({
    name: 'idLot',
    description: 'Identificador del registro',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: EatLostDTO,
  })
  @Put(':idLot')
  async updateRegister(@Body() dto: any, @Param('idLot') idLot: number) {
    const value = await this.findOneRegister(idLot);
    return dto.idLot == idLot
      ? value.count > 0
        ? this.service.update(idLot, dto)
        : {
            statusCode: HttpStatus.BAD_REQUEST,
            message: ['El registro no existe.'],
          }
      : {
          statusCode: HttpStatus.BAD_REQUEST,
          message: [
            'La clave del registro no coincide con la clave del cuerpo de la petición.',
          ],
        };
  }
  @ApiOperation({ summary: 'Elimina un registro' })
  @ApiParam({
    name: 'idLot',
    description: 'Identificador del registro',
  })
  @ApiResponse({
    status: 200,
    description: 'Elimina un registro',
  })
  @Delete(':idLot')
  async delete(@Param('idLot') idLot: number) {
    return await this.service.delete(idLot);
  }
}
