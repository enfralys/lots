import { BaseService, ResponseData } from 'sigebi-lib-common';
import { StatusXScreenEntity } from '../../infrastructure/eat-state-x-screen.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PaginateQuery } from 'nestjs-paginate';
import { EatStatusXScreenDto } from '../dto/eat-status-x-screen.dto';


@Injectable()
export class EatStatusXScreenService extends BaseService<StatusXScreenEntity> {
  constructor(
    @InjectRepository(StatusXScreenEntity)
    private tmpLotsEatRepository: Repository<StatusXScreenEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<StatusXScreenEntity> {
    return this.tmpLotsEatRepository;
  }

  async findAllRegisters(query: PaginateQuery) {
    return this.commonFilterService.paginateFilter<StatusXScreenEntity>(
      query,
      this.tmpLotsEatRepository,
      null,
      'id',
    );
  }

  async findOneRegisterById(
    id: number,
  ): Promise<ResponseData<StatusXScreenEntity> | any> {
    const value = await this.tmpLotsEatRepository.findOne({
      where: { id: id },
    });
    return value
      ? {
        statusCode: HttpStatus.OK,
        message: ['Datos obtenidos correctamente.'],
        data: value,
        count: 1,
      }
      : {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['No se encontraron registros.'],
        data: [],
        count: 0,
      };
  }

  async create(
    tmpLotsEatDto: EatStatusXScreenDto,
  ): Promise<ResponseData<StatusXScreenEntity> | any> {
    try {
      const detailInventory = await this.tmpLotsEatRepository.save(tmpLotsEatDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: ['Registro creado correctamente.'],
        data: detailInventory,
        count: 1,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: ['Error al crear el registro.'],
        data: [],
        count: 0,
      };
    }
  }

  async update(
    tmpLotsEatDto: EatStatusXScreenDto,
    id: number,
  ): Promise<ResponseData<StatusXScreenEntity> | any> {
    try {
      await this.tmpLotsEatRepository.update({ id }, tmpLotsEatDto);
      const detailInventory = await this.tmpLotsEatRepository.findOne({
        where: { id },
      });
      return {
        statusCode: HttpStatus.OK,
        message: ['Registro actualizado correctamente.'],
        data: detailInventory,
        count: 1,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: ['Error al actualizar el registro.'],
        data: [],
        count: 0,
      };
    }
  }

  async delete(id: number): Promise<any> {
    const value = await this.tmpLotsEatRepository.findOne({
      where: { id },
    });
    return value
      ? this.tmpLotsEatRepository.delete({ id }).then(() => {
        return {
          statusCode: HttpStatus.OK,
          message: ['Registro eliminado correctamente.'],
        };
      })
      : {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['No se encontraron registros.'],
      };
  }
}
