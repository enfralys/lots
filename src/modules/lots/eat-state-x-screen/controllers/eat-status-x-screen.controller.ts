import { BaseController, BaseService } from 'sigebi-lib-common';
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
import { StatusXScreenEntity } from '../../infrastructure/eat-state-x-screen.entity';
import { EatStatusXScreenDto } from '../dto/eat-status-x-screen.dto';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { EatStatusXScreenService } from '../services/eat-status-x-screen.service';

@ApiCreatedResponse()
@ApiTags('crud eat-status-x-screen')
@Controller('eat-status-x-screen')
export class EatStatusXScreenController extends BaseController<StatusXScreenEntity> {
  constructor(private readonly service: EatStatusXScreenService) {
    super();
  }

  getService(): BaseService<StatusXScreenEntity> {
    return this.service;
  }

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [EatStatusXScreenDto],
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
    name: 'id',
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: EatStatusXScreenDto,
  })
  @Get(':id')
  async findOneRegister(@Param('id') id: number) {
    return await this.service.findOneRegisterById(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: EatStatusXScreenDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: EatStatusXScreenDto,
  })
  @Post()
  async createNewRegister(@Body() dto: EatStatusXScreenDto) {
    const value = await this.findOneRegister(dto.id);
    return value.count > 0
      ? {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['La clave ya fue registrada'],
      }
      : this.getService().create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: EatStatusXScreenDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador del registro',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: EatStatusXScreenDto,
  })
  @Put(':id')
  async updateRegister(@Param('id') id: number, @Body() dto: EatStatusXScreenDto) {
    const value = await this.findOneRegister(id);
    return dto.id == id
      ? value.count > 0
        ? this.service.update(dto, id)
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
    name: 'id',
    description: 'Identificador del registro',
  })
  @ApiResponse({
    status: 200,
    description: 'Elimina un registro',
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
