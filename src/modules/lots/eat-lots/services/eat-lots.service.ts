import { BaseService, ResponseData } from 'sigebi-lib-common';
import { EatLotsEntity } from '../../infrastructure/eat-lots.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PaginateQuery } from 'nestjs-paginate';
import { EatLostDTO } from '../../application/dtos/eat-lots.dto';
import { EatEventEntity } from '../../infrastructure/eat.event.entity';

@Injectable()
export class EatLotsService extends BaseService<EatLotsEntity> {
  constructor(
    @InjectRepository(EatLotsEntity)
    private eatLotsRepository: Repository<EatLotsEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }
  getRepository(): Repository<EatLotsEntity> {
    return this.eatLotsRepository;
  }
  /*async findAllRegisters(
    query: PaginateQuery,
  ): Promise<ResponseDataDTO<ProgrammingGoodEntity> | any> {
    var queryBuilder = this.repository.createQueryBuilder('table');
    queryBuilder.leftJoinAndMapOne(
      'table.programming',
      ProgrammingEntity,
      'stg',
      'table.id_programacion = stg.id_programacion',
    );

    return this.commonFilterService.paginateFilter<ProgrammingGoodEntity>(
      query,
      this.repository,
      queryBuilder,
      'programmingId',
    );
  }
*/
  async findAllRegisters(query: PaginateQuery) {
    const queryBuilder = this.eatLotsRepository
      .createQueryBuilder('comer_lotes')
      .leftJoinAndMapOne(
        'comer_lotes.eat_events',
        EatEventEntity,
        'eat_events',
        'eat_events.idEvent = comer_lotes.idEvent',
      );

    return this.commonFilterService.paginateFilter<EatLotsEntity>(
      query,
      this.eatLotsRepository,
      queryBuilder,
      'idEvent',
    );
  }

  async findOneRegisterByIds(
    idLot: number,
  ): Promise<ResponseData<EatLotsEntity> | any> {
    const value = await this.eatLotsRepository.findOne({
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
    eatLostDTO: EatLostDTO,
  ): Promise<ResponseData<EatLotsEntity> | any> {
    try {
      const detailInventory = await this.eatLotsRepository.save(eatLostDTO);
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
    idLot: number,
    EatLostDTO: EatLostDTO,
  ): Promise<ResponseData<EatLotsEntity> | any> {
    try {
      await this.eatLotsRepository.update({ idLot }, EatLostDTO);
      const detailInventory = await this.eatLotsRepository.findOne({
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
    const value = await this.eatLotsRepository.findOne({
      where: { idLot },
    });
    return value
      ? this.eatLotsRepository.delete({ idLot }).then(() => {
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
