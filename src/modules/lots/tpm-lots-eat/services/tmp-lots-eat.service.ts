import { BaseService, ResponseData } from 'sigebi-lib-common';
import { TmpLotsEatEntity } from '../../infrastructure/tmp-lots-eat.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PaginateQuery } from 'nestjs-paginate';
import { TmpLotsEatDto } from '../dto/tmp-lots-eat.dto';


@Injectable()
export class TmpLotsEatService extends BaseService<TmpLotsEatEntity> {
  constructor(
    @InjectRepository(TmpLotsEatEntity)
    private tmpLotsEatRepository: Repository<TmpLotsEatEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<TmpLotsEatEntity> {
    return this.tmpLotsEatRepository;
  }
  
  async findAllRegisters(query: PaginateQuery) {
    return this.commonFilterService.paginateFilter<TmpLotsEatEntity>(
      query,
      this.tmpLotsEatRepository,
      null,
      'idLot',
    );
  }

  async findOneRegisterById(
    idLot: number,
  ): Promise<ResponseData<TmpLotsEatEntity> | any> {
    const value = await this.tmpLotsEatRepository.findOne({
      where: { idLot: idLot },
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
    tmpLotsEatDto: TmpLotsEatDto,
  ): Promise<ResponseData<TmpLotsEatEntity> | any> {
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
    tmpLotsEatDto: TmpLotsEatDto,
    idLot: number,
  ): Promise<ResponseData<TmpLotsEatEntity> | any> {
    try {
      await this.tmpLotsEatRepository.update({ idLot }, tmpLotsEatDto);
      const detailInventory = await this.tmpLotsEatRepository.findOne({
        where: { idLot },
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

  async delete(idLot: number): Promise<any> {
    const value = await this.tmpLotsEatRepository.findOne({
      where: { idLot },
    });
    return value
      ? this.tmpLotsEatRepository.delete({ idLot }).then(() => {
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
