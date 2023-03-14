import { BaseController, BaseService } from 'sigebi-lib-common';
import { TmpLotsEatEntity } from '../../infrastructure/tmp-lots-eat.entity';
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
import { TmpLotsEatDto  } from '../dto/tmp-lots-eat.dto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { TmpLotsEatService } from '../services/tmp-lots-eat.service';

@ApiCreatedResponse()
@ApiTags('crud tmpLotsEat')
@Controller('tmp-lots-eat')
export class TmpLotsEatController extends BaseController<TmpLotsEatEntity> {
  constructor(private readonly service: TmpLotsEatService) {
    super();
  }
  getService(): BaseService<TmpLotsEatEntity> {
    return this.service;
  }
  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [TmpLotsEatDto],
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
    type: TmpLotsEatDto,
  })
  @Get(':idLot')
  async findOneRegister(@Param('idLot') idLot: number) {
    return await this.service.findOneRegisterByIds(idLot);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: TmpLotsEatDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: TmpLotsEatDto,
  })
  @Post()
  async createNewRegister(@Body() dto: TmpLotsEatDto) {
    const value = await this.findOneRegister(dto.idLot);
    return value.count > 0
      ? {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['La clave ya fue registrada'],
        }
      : this.getService().create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: TmpLotsEatDto })
  @ApiParam({
    name: 'idLot',
    description: 'Identificador del registro',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: TmpLotsEatDto,
  })
  @Put(':idLot')
  async updateRegister(@Param('idLot') idLot: number, @Body() dto: TmpLotsEatDto) {
    const value = await this.findOneRegister(idLot);
    return dto.idLot == idLot
      ? value.count > 0
        ? this.service.update(dto, idLot)
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
