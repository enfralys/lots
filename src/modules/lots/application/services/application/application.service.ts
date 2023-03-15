import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EatLotsEntity } from 'src/modules/lots/infrastructure/eat-lots.entity';
import { EatEventEntity } from 'src/modules/lots/infrastructure/eat.event.entity';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PaginateQuery } from 'nestjs-paginate';
import { DeteleteRevPcvDTO } from 'src/modules/lots/application/dtos/delete-rev-pcv.dto';
import { EatParametersForLotEntity } from 'src/modules/lots/infrastructure/eat-parametersforlot.entity';
import { EstEstLotEntity } from 'src/modules/lots/infrastructure/eat-est-lot.entity';
import { EatClientEntity } from 'src/modules/lots/infrastructure/eat_client.entity';
import { EatTpEventEntity } from 'src/modules/lots/infrastructure/eat-tp-event.entity';
import { EatGoodByLotEntity } from 'src/modules/lots/infrastructure/eat-goods-by-lot.entity';
import { DescripElectronicDTO } from 'src/modules/lots/application/dtos/descrip-electronic.dto';
import { EatPagosRefgensEntity } from 'src/modules/lots/infrastructure/eat-payments-ref-gens';
import { PaRunOperDTO } from 'src/modules/lots/application/dtos/pa-run-oper.dto';
import { EatDetLcEntity } from 'src/modules/lots/infrastructure/eat-det-lc.entity';
import { EatPayefEntity } from 'src/modules/lots/infrastructure/eat-payef.entity';
import { EatFactureEntity } from 'src/modules/lots/infrastructure/eat-facture.entity';
import { EatEventsTmpEntity } from 'src/modules/lots/infrastructure/eat-events-tmp.entity';
import { EatFactureElecEntity } from 'src/modules/lots/infrastructure/eat-facture-elec.entity';
import { EatClientByEventEntity } from 'src/modules/lots/infrastructure/eat-client-by-event.entity';
import { EatValpagCfdiEntity } from 'src/modules/lots/infrastructure/eat-valpag-cfdi.entity';
import { EstateEntity } from 'src/modules/lots/infrastructure/estate.entity';
import { EatRejectedGoodEntity } from 'src/modules/lots/infrastructure/eat-rejected-goods.entity';
import { GetLotAfDTO } from 'src/modules/lots/application/dtos/get-lot-af.dto';
import { EatParametersModEntity } from 'src/modules/lots/infrastructure/eat-parameters-mod.entity';
import { EatRefGarantiesEntity } from 'src/modules/lots/infrastructure/eat-ref-garanties.entity';
import { TmpLotsEatEntity } from 'src/modules/lots/infrastructure/tmp-lots-eat.entity';
import { EatWellAfterTableDTO } from 'src/modules/lots/application/dtos/eating-well-after-table.dto';
import { PaSalesEatLotsDTO } from 'src/modules/lots/application/dtos/pa-sales-eat-lots.dto';
import { EatLcEntity } from 'src/modules/lots/infrastructure/eat-lc.entity';
import { PaCreateLotsDTO } from 'src/modules/lots/application/dtos/pa-create-lots.dto';
import { EatGoodsExelEntity } from 'src/modules/lots/infrastructure/eat-goods-excel.entity';
import { FillDateEatDTO } from '../../dtos/fill-data-eat.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { GetFillTmpEatDT } from '../../dtos/get-fill-tmp-eat.dto';
import { LotsByUserV5DTO } from '../../dtos/lots-by-user-v5.dto';
import { CatStoreEntity } from 'src/modules/lots/infrastructure/cat-store.entity';
import { PaEatFailDTO } from '../../dtos/pa-eat-fail.dto';
import { ActTmpEatDTO } from '../../dtos/act-tmp-eat.dto';
import { paDispMueblesDTO } from '../../dtos/pa-dismuebles.dto';

@Injectable()
export class ApplicationService {
      constructor(
            @InjectRepository(EatLotsEntity)
            private eatLotsRepository: Repository<EatLotsEntity>,

            @InjectRepository(EatEventEntity)
            private eatEventRepository: Repository<EatEventEntity>,

            @InjectRepository(EatParametersForLotEntity)
            private eatParametersForLotRepository: Repository<EatParametersForLotEntity>,

            @InjectRepository(EstEstLotEntity)
            private estEstLotRepository: Repository<EstEstLotEntity>,

            @InjectRepository(EatClientEntity)
            private eatClientRepository: Repository<EatClientEntity>,

            @InjectRepository(EatClientByEventEntity)
            private eatClientByEventRepository: Repository<EatClientByEventEntity>,

            @InjectRepository(EatTpEventEntity)
            private eatTpEventRepositoy: Repository<EatTpEventEntity>,

            @InjectRepository(EatGoodByLotEntity)
            private eatGoodByLotRepository: Repository<EatGoodByLotEntity>,

            @InjectRepository(EatPagosRefgensEntity)
            private eatPagosRefgensRepository: Repository<EatPagosRefgensEntity>,

            @InjectRepository(TmpLotsEatEntity)
            private tmpLotsEatRepository: Repository<TmpLotsEatEntity>,

            @InjectRepository(EatPayefEntity)
            private eatPayefRepository: Repository<EatPayefEntity>,

            @InjectRepository(EatFactureEntity)
            private eatFactureRepositoy: Repository<EatFactureEntity>,

            @InjectRepository(EatEventsTmpEntity)
            private eatEventsTmpRepository: Repository<EatEventsTmpEntity>,

            @InjectRepository(EatFactureElecEntity)
            private eatFactureElecRepository: Repository<EatFactureElecEntity>,

            @InjectRepository(EatValpagCfdiEntity)
            private eatValpagCfdiRepository: Repository<EatValpagCfdiEntity>,

            @InjectRepository(EstateEntity)
            private estateRepository: Repository<EstateEntity>,

            @InjectRepository(EatLcEntity)
            private eatLcRepository: Repository<EatLcEntity>,

            @InjectRepository(EatRejectedGoodEntity)
            private eatRejectedGoodRepository: Repository<EatRejectedGoodEntity>,

            @InjectRepository(EatParametersModEntity)
            private eatParametersModRepository: Repository<EatParametersModEntity>,

            @InjectRepository(EatRefGarantiesEntity)
            private eatRefGarantiesRepository: Repository<EatRefGarantiesEntity>,

            @InjectRepository(EatDetLcEntity)
            private eatDetLcRepository: Repository<EatDetLcEntity>,

            @InjectRepository(EatGoodsExelEntity)
            private eatGoodsExelRepository: Repository<EatGoodsExelEntity>,

            @InjectRepository(CatStoreEntity)
            private catStoreRepositoy: Repository<CatStoreEntity>,

            private commonFilterService: CommonFilterService,

            @Inject('ms-sb-0001-appraise')
            private readonly clienteProxyAppraise: ClientProxy,
            @Inject('ms-sb-0001-captureline')
            private readonly clineteProxyCaptureline: ClientProxy,
      ) {
            this.clienteProxyAppraise.connect();
            this.clineteProxyCaptureline.connect();
      }

      async getSummary(in_idEvent: number) {
            try {
                  const result = await this.eatLotsRepository.query(`
      SELECT (SELECT COUNT(p.id_estatusvta) FROM sera.COMER_LOTES p WHERE p.id_estatusvta IN ('PAG','VEN','PAGE') AND p.id_evento = ${in_idEvent}) as Pagados,
      (SELECT COUNT(c.id_estatusvta) FROM sera.COMER_LOTES c WHERE c.id_estatusvta IN ('CAN','CANC') AND c.id_evento = ${in_idEvent}) as Penalizados,
      (SELECT COUNT(d.id_estatusvta) FROM sera.COMER_LOTES d WHERE d.id_estatusvta IN ('DES') AND d.id_evento = ${in_idEvent}) as Desiertos,
      (SELECT COUNT(*) FROM sera.COMER_LOTES lot INNER JOIN sera.COMER_BIENESXLOTE bl ON lot.id_lote = bl.id_lote WHERE lot.id_estatusvta IN ('PAG','VEN','PAGE') AND lot.id_evento=${in_idEvent})AS BienesPagados,
      (SELECT COUNT(*) FROM sera.COMER_LOTES lot INNER JOIN sera.COMER_BIENESXLOTE bl ON lot.id_lote = bl.id_lote WHERE lot.id_estatusvta IN ('CAN','CANC') AND lot.id_evento=${in_idEvent})AS BienesPenalizados, 
      (SELECT COUNT(*) FROM sera.COMER_LOTES lot INNER JOIN sera.COMER_BIENESXLOTE bl ON lot.id_lote = bl.id_lote WHERE lot.id_estatusvta IN ('DES') AND lot.id_evento=${in_idEvent})AS BienesDesiertos
    from DUAL;
            `);
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getLotUser(rfc: string) {
            try {
                  const result = await this.eatLotsRepository.query(`    

      SELECT CL.ID_EVENTO,
      CL.ID_CLIENTE,
      CL.ID_LOTE,
      CL.PRECIO_FINAL,
      CE.ID_TPEVENTO,
      CE.DIRECCION
 FROM sera.COMER_LOTES CL, sera.COMER_EVENTOS CE, sera.COMER_CLIENTES CC
WHERE     CE.ID_EVENTO = CL.ID_EVENTO
      AND CC.ID_CLIENTE = CL.ID_CLIENTE
      AND CC.RFC = '${rfc}'
      AND CL.ID_ESTATUSVTA IN ( 'VEN', 'GARA' ) 
      AND CL.PRECIO_FINAL IS NOT NULL
      AND EXISTS (SELECT 1
                     FROM sera.COMER_EVENTOS_TPROCESO CETP
                     WHERE CETP.ID_EVENTO = CE.ID_EVENTO
                     AND CETP.FASE = 2
                 )   
 ORDER BY CL.ID_EVENTO
            `);
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getConsultLotThirdParty(idLot: number) {
            try {
                  const result = await this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select([
                              'comer_lotes.idLot',
                              'comer_lotes.idEvent',
                              'comer_lotes.description',
                              'comer_lotes.finalPrice',
                        ])
                        .where('comer_lotes.finalPrice IS NOT NULL')
                        .andWhere('comer_lotes.idLot = :idLot', { idLot: idLot })
                        .getMany();

                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getConsultThirdPartyLots(idEvent: number) {
            try {
                  const result = await this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select([
                              'comer_lotes.idLot',
                              'comer_lotes.idStatusVta',
                              'comer_lotes.idEvent',
                              'comer_lotes.description',
                              'comer_lotes.finalPrice',
                              'comer_lotes.idClient',
                        ])
                        .where('comer_lotes.idStatusVta IN (:ven, :prep, :apro)', {
                              ven: 'VEN',
                              prep: 'PREP',
                              apro: 'APRO',
                        })
                        .andWhere('comer_lotes.finalPrice IS NOT NULL')
                        .andWhere('comer_lotes.idEvent = :idEvent', { idEvent })
                        .andWhere('comer_lotes.idClient IS NOT NULL')
                        .orderBy('comer_lotes.idLot')
                        .getRawMany();
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getConsultSaleLots(idClient: number, query: PaginateQuery) {
            try {
                  const queryBuilder = this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select([
                              'comer_lotes.idLot',
                              'comer_lotes.idEvent',
                              'comer_lotes.description',
                              'comer_lotes.finalPrice',
                              'comer_lotes.lotPublic',
                              'comer_lotes.idClient',
                        ])
                        .where('comer_lotes.idStatusVta = :status', { status: 'VEN' })
                        .andWhere('comer_lotes.finalPrice IS NOT NULL')
                        .andWhere('comer_lotes.idClient = :idClient', { idClient })
                        .orderBy('comer_lotes.idLot');

                  return this.commonFilterService.paginateFilter<EatLotsEntity>(
                        query,
                        this.eatLotsRepository,
                        queryBuilder,
                        'idEvent',
                  );
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getObtLotsWithoutIva(idEvent: number) {
            try {
                  const result = await this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select('COUNT(0)', 'lotsWithoutIva')
                        .where('comer_lotes.idEvent = :idEvent', { idEvent })
                        .andWhere('comer_lotes.lotPublic != :lotPublic', { lotPublic: 0 })
                        .andWhere('comer_lotes.aIva IS NULL')
                        .getRawOne();

                  if (result) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getToObtainIdLot(idEvent: number, lotPublic: number) {
            try {
                  const result = await this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select('comer_lotes.idLot')
                        .where('comer_lotes.lotPublic = :lotPublic', {
                              lotPublic,
                        })
                        .andWhere('comer_lotes.idEvent = :idEvent', {
                              idEvent,
                        })
                        .getMany();

                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getWinnersReport(idEvent: number) {
            try {
                  const result = await this.eatLotsRepository.query(`     

      SELECT 
      CL.ID_EVENTO, CL.LOTE_PUBLICO AS LOTE,      
      ''''||GAR.REF_GSAE||GAR.REF_GBANCO REFERENCIA,
      GAR.MONTO,   
      CPR.FECHA FECHA_PAGO,        
      CPR.CVE_BANCO, 
      CPR.CUENTA,
      CL.ID_CLIENTE,
      sera.FA_COMER_NOMCLIENTE((SELECT RFC FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE )) CLIENTE,
         (SELECT RFC FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) RFC,       
         (SELECT ''''||TELEFONO FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) TELEFONO,     
         (SELECT CORREOWEB FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) CORREOWEB,
         (SELECT ''''||CLABE_INTERBANCARIA FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) CLABE_INTERBANCARIA,
         (SELECT ''''||BANCO FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) BANCO,
         (SELECT ''''||SUCURSAL FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) SUCURSAL,
         (SELECT ''''||CUENTA_CHEQUES FROM sera.COMER_CLIENTES CLI WHERE CLI.ID_CLIENTE = CL.ID_CLIENTE ) CUENTA_CHEQUES       
      FROM sera.COMER_LOTES CL, comer.COMER_REF_GARANTIAS GAR, sera.COMER_PAGOREF CPR
       WHERE  CL.ID_EVENTO = ${idEvent}
          AND CL.ID_EVENTO = GAR.ID_EVENTO
          AND CL.ID_LOTE = GAR.ID_LOTE
          AND CL.ID_CLIENTE = GAR.ID_CLIENTE  
          AND CL.ID_CLIENTE IS NOT NULL
         AND  CPR.REFERENCIA = GAR.REF_GSAE||GAR.REF_GBANCO
          ORDER BY CL.LOTE_PUBLICO; `);
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async paDeleteRevPcv({
            pIdevento,
            pNoBien,
            pTpEvento,
            pLote,
      }: DeteleteRevPcvDTO) {
            try {
                  const estatusFinal = await this.eatLotsRepository
                        .query(`SELECT ESTATUS_FINAL FROM sera.COMER_ESTATUS_X_PANTALLA WHERE
       CVE_PANTALLA='FCOMEREVENTOS' AND ACCION='ELIMINA_CPV' AND IDENTIFICADOR= '${pTpEvento}';`);

                  const existe = await this.eatLotsRepository
                        .query(`Select count(1) from sera.COMER_EVENTOS CE
      WHERE ID_EVENTO=${pIdevento}
      AND EXISTS (SELECT 1
                  FROM sera.COMER_LOTES CL
                  WHERE CE.ID_EVENTO=CL.ID_EVENTO
                  AND ID_ESTATUSVTA ='${estatusFinal[0]?.estatus_final}'
                  AND EXISTS  (SELECT 1
                               FROM sera.COMER_BIENESXLOTE BL
                               WHERE BL.ID_LOTE=CL.ID_LOTE
                               ))`);

                  console.log(existe, 'Existe');

                  const valorBase = await this.eatLotsRepository
                        .query(`SELECT COALESCE(VALOR_BASE,0) FROM sera.COMER_BIENESXLOTE BL
      WHERE  BL.ID_LOTE=${pLote}
      AND BL.NO_BIEN=${pNoBien}
            AND EXISTS (SELECT 1 FROM sera.COMER_LOTES CL
                        WHERE CL.ID_LOTE=BL.ID_LOTE
                              AND  EXISTS (SELECT 1 FROM sera.COMER_EVENTOS
                                                                  WHERE ID_EVENTO =${pIdevento}))`);
                  console.log(valorBase, 'Valor Base');

                  const noTranfen = await this.eatLotsRepository
                        .query(`Select NO_TRANSFERENTE from sera.bienes b, sera.expedientes e 
where b.no_expediente = e.no_expediente and b.no_bien = ${pNoBien} `);
                  console.log(noTranfen, 'No Transferente');

                  if (existe[0]?.count >= 1) {
                        const idLoteCanc = await this.eatLotsRepository.query(`
            Select id_lote from sera.comer_lotes where id_evento = ${pIdevento} and id_estatusvta='${estatusFinal[0]?.estatus_final}'`);
                        console.log(idLoteCanc, 'Id Lote Canc');

                        const idBienLotNew = await this.eatLotsRepository
                              .query(`SELECT COALESCE(MAX(ID_BIENXLOTE), 0) + 1 AS ID_BIENXLOTE_NEW
            FROM sera.comer_bienesxlote
            WHERE ID_LOTE = ${idLoteCanc[0]?.id_lote}`);
                        console.log(idBienLotNew, 'Id Bien Lote New');

                        const lotP1 = await this.eatLotsRepository
                              .query(`SELECT LOTE_PUBLICO FROM sera.COMER_LOTES WHERE ID_LOTE= 
            ${idLoteCanc[0]?.id_lote} AND ID_EVENTO = ${pIdevento}`);

                        console.log(lotP1, 'Lote P1');

                        const result = await this.eatLotsRepository
                              .query(`UPDATE sera.COMER_BIENESXLOTE CB
            SET ID_LOTE = ${idLoteCanc[0]?.id_lote},
                    ID_BIENXLOTE =  ${idBienLotNew[0]?.id_bienxlote_new} ,
                        ID_EVENTO_COMER =${pIdevento},
                                ID_LOTE_COMER = ${lotP1[0]?.lote_publico},
                                ID_LOTE_REMESA=NULL,
                                ID_EVENTO_REMESA=NULL
                                    WHERE ID_LOTE IN (SELECT ID_LOTE
                                       FROM sera.COMER_LOTES
                                           WHERE ID_EVENTO = (SELECT ID_EVENTO
                                                FROM sera.COMER_EVENTOS
                                                      WHERE ID_TPEVENTO = ${pTpEvento}
                                                            AND ID_EVENTO = ${pIdevento})    )
                                                            AND NO_BIEN = ${pNoBien}; `);

                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    count: 0,
                              };
                  } else {
                        const vLote = await this.eatLotsRepository.query(
                              `SELECT SEQ_COMER_LOTES.NEXTVAL AS V_LOTE FROM DUAL`,
                        );
                        console.log(vLote, 'V Lote');

                        const lPublicoFin = await this.eatLotsRepository
                              .query(`SELECT COALESCE(MAX(LOTE_PUBLICO),1) +1 AS L_PUBLICO_FIN
            FROM sera.COMER_LOTES CLO,
            sera.COMER_EVENTOS CEV
            WHERE CLO.ID_EVENTO =CEV.ID_EVENTO
            AND CEV.ID_TPEVENTO =${pTpEvento} 
            AND CLO.ID_EVENTO = ${pIdevento} `);

                        console.log(lPublicoFin, 'LPUBLICO');

                        const idBienxloteNew = await this.eatLotsRepository
                              .query(`SELECT COALESCE(MAX(ID_BIENXLOTE),0) + 1
             FROM sera.COMER_BIENESXLOTE
                WHERE ID_LOTE = ${vLote[0]?.vLote}`);

                        console.log(idBienxloteNew, 'Id bien x lote new ');

                        const result = await this.eatLotsRepository
                              .query(`UPDATE sera.COMER_BIENESXLOTE CB
                SET ID_LOTE = ${vLote[0]?.vLote},
                        ID_BIENXLOTE =  ${idBienxloteNew[0]?.idBienxloteNew} ,
                            ID_EVENTO_COMER =${pIdevento},
                                    ID_LOTE_COMER = ${lPublicoFin[0]?.lPublicoFin},
                                        WHERE ID_LOTE IN (SELECT ID_LOTE
                                           FROM sera.COMER_LOTES
                                               WHERE ID_EVENTO = (SELECT ID_EVENTO
                                                    FROM sera.COMER_EVENTOS
                                                          WHERE ID_TPEVENTO = ${pTpEvento}
                                                                AND ID_EVENTO = ${pIdevento})    )`);

                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getEatParametersForLot(query: PaginateQuery) {
            return this.commonFilterService.paginateFilter<EatParametersForLotEntity>(
                  query,
                  this.eatParametersForLotRepository,
                  null,
                  'idLot',
            );
      }

      async getSpUserEventsQuery(rfc: string) {
            try {
                  const result = await this.eatLotsRepository
                        .createQueryBuilder('comer_lotes')
                        .select('DISTINCT comer_lotes.idEvent')
                        .leftJoin(EatClientEntity, 'CC', 'comer_lotes.idClient = CC.idClient')
                        .where('comer_lotes.idStatusVta = :idStatusVta', {
                              idStatusVta: 'VEN',
                        })
                        .andWhere('comer_lotes.finalPrice IS NOT NULL')
                        .andWhere('CC.rfc = :rfc', { rfc })
                        .getRawMany();

                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getDescriptionElectronic({
            idEvent,
            receiptDescription,
            rfc,
      }: DescripElectronicDTO) {
            try {
                  const result = await this.eatLotsRepository

                        .createQueryBuilder('comer_lotes')
                        .select('comer_lotes.idLot')
                        .addSelect('comer_lotes.description')
                        .addSelect('comer_lotes.lotPublic')
                        .addSelect('comer_lotes.palette')
                        .addSelect('comer_lotes.idStatusVta')
                        .addSelect('comer_lotes.ivaLot')
                        .addSelect(
                              '(comer_lotes.amountAppIva - comer_lotes.ivaLot) as MONTO_APP_IVA',
                        )
                        .addSelect('comer_lotes.amountNoAppIva')
                        .addSelect('CEIL(comer_lotes.finalPrice) as PRECIO_FINAL')

                        .innerJoin(EatEventEntity, 'CE', 'comer_lotes.idEvent = CE.idEvent')
                        .innerJoin(EatGoodByLotEntity, 'CBL', 'comer_lotes.idLot = CBL.idLot')
                        .innerJoin(EatClientEntity, 'CC', 'CC.idClient = comer_lotes.idClient')
                        .innerJoin(EatTpEventEntity, 'CTE', 'CE.idEventType = CTE.idEventType')
                        .where('comer_lotes.idEvent = :idEvent', { idEvent })
                        .andWhere('CC.rfc = :rfc', { rfc })
                        .andWhere('CTE.receiptDescription = :receiptDescription', {
                              receiptDescription,
                        })
                        .getRawMany();
                  console.log(result);

                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getSpConsultUnpaidLots(idEvent: number) {
            try {
                  const result = await this.eatLotsRepository.query(`SELECT CEV.ID_EVENTO,
      CEV.CVE_PROCESO,
      CASE
         WHEN DIRECCION = 'I' THEN 'Inmueble'
         WHEN DIRECCION = 'M' THEN 'Mueble'
      END DIRECCION_DES,
      CLO.ID_LOTE,
      CLO.LOTE_PUBLICO,
      CLO.DESCRIPCION,
      SERA.FA_COMER_NOMCLIENTE (CCL.RFC) CLIENTE,
      CCL.RFC,
      CCL.TELEFONO,
      CCL.CORREOWEB,
      CLO.PRECIO_FINAL,
      (SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)  FROM SERA.COMER_PAGOSREFGENS CPG
        WHERE CPG.ID_LOTE = CLO.ID_LOTE
          AND TIPO = 'N'
          AND EXISTS
          (SELECT 1
          FROM SERA.COMER_PAGOREF CPA
          WHERE CPA.ID_PAGO = CPG.ID_PAGO
            AND CPA.IDORDENINGRESO IS NOT NULL)) MONTO_PAGADO, (CLO.PRECIO_FINAL-(SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)
          FROM SERA.COMER_PAGOSREFGENS CPG
            WHERE     CPG.ID_LOTE = CLO.ID_LOTE
              AND TIPO = 'N'
              AND EXISTS
                (SELECT 1  FROM SERA.COMER_PAGOREF CPA
                  WHERE CPA.ID_PAGO = CPG.ID_PAGO  AND CPA.IDORDENINGRESO IS NOT NULL))) PENDIENTE_PAGAR
                  FROM SERA.COMER_CLIENTES CCL, SERA.COMER_EVENTOS CEV, SERA.COMER_LOTES CLO
                  WHERE     CCL.ID_CLIENTE = CLO.ID_CLIENTE
                  AND CLO.ID_EVENTO = CEV.ID_EVENTO
                  AND CLO.ID_EVENTO = ${idEvent}
                  AND (SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)
                  FROM sera.COMER_PAGOSREFGENS CPG
                  WHERE CPG.ID_LOTE = CLO.ID_LOTE
                  AND TIPO = 'N'
                  AND EXISTS
                  (SELECT 1 FROM SERA.COMER_PAGOREF CPA
                  WHERE     CPA.ID_PAGO = CPG.ID_PAGO
                  AND CPA.IDORDENINGRESO IS NOT NULL))< CLO.PRECIO_FINAL
                  ORDER BY CEV.ID_EVENTO DESC, CLO.LOTE_PUBLICO ASC;`);
                  console.log(result);
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getSpQueryBatchesPAG(rfc: string) {
            try {
                  const result = await this.eatLotsRepository.query(`
      SELECT CEV.ID_EVENTO,
      CEV.CVE_PROCESO,
      CEV.DIRECCION,
      CASE
         WHEN DIRECCION = 'I' THEN 'Inmueble'
         WHEN DIRECCION = 'M' THEN 'Mueble'
      END
         DIRECCION_DES,
      CLO.ID_LOTE,
      CLO.LOTE_PUBLICO,
      CLO.PRECIO_FINAL,
      (SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)
         FROM SERA.COMER_PAGOSREFGENS CPG
        WHERE CPG.ID_LOTE = CLO.ID_LOTE AND TIPO = 'N'
                 AND EXISTS (SELECT 1 FROM SERA.COMER_PAGOREF CPA
                                 WHERE CPA.ID_PAGO = CPG.ID_PAGO
                                     AND CPA.IDORDENINGRESO IS NOT NULL))
         MONTO_PAGADO,
      CASE
         WHEN (SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)
                 FROM SERA.COMER_PAGOSREFGENS CPG
                WHERE CPG.ID_LOTE = CLO.ID_LOTE AND TIPO = 'N'
                         AND EXISTS (SELECT 1 FROM SERA.COMER_PAGOREF CPA
                                 WHERE CPA.ID_PAGO = CPG.ID_PAGO
                                     AND CPA.IDORDENINGRESO IS NOT NULL)) =
                 CLO.PRECIO_FINAL
         THEN
            1
         ELSE
            0
      END
         ESTADO,
         CASE
         WHEN (SELECT COALESCE (SUM (IVA + MONTO_APP_IVA + MONTO_NOAPP_IVA), 0)
                 FROM SERA.COMER_PAGOSREFGENS CPG
                WHERE CPG.ID_LOTE = CLO.ID_LOTE AND TIPO = 'N'
                         AND EXISTS (SELECT 1 FROM SERA.COMER_PAGOREF CPA
                                 WHERE CPA.ID_PAGO = CPG.ID_PAGO
                                     AND CPA.IDORDENINGRESO IS NOT NULL)) =
                 CLO.PRECIO_FINAL
         THEN
            'Liquidado'
         ELSE
            'Pendiente de Liquidar'
      END ESTADO_DES, 
      CEV.OBSERVACIONES,
      CLO.DESCRIPCION
 FROM SERA.COMER_CLIENTES CCL,
      SERA.COMER_EVENTOS CEV,
      SERA.COMER_LOTES CLO
WHERE     CCL.ID_CLIENTE = CLO.ID_CLIENTE
      AND CLO.ID_EVENTO = CEV.ID_EVENTO
      AND CCL.RFC = '${rfc}'
AND CEV.FEC_FALLO >= date_trunc('month', CURRENT_DATE) - INTERVAL '6 months'
GROUP BY CEV.ID_EVENTO,
      CVE_PROCESO,
      DIRECCION,
      CLO.ID_LOTE,
      LOTE_PUBLICO,
      PRECIO_FINAL,
      OBSERVACIONES,
      DESCRIPCION
ORDER BY CEV.ID_EVENTO DESC, CLO.LOTE_PUBLICO ASC;`);
                  if (result.length > 0) {
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                              data: result,
                              count: result.length,
                        };
                  } else
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                              data: [],
                              count: 0,
                        };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaRunOper({
            aIva,
            baseValue,
            description,
            finalPrice,
            idLot,
            referenceG,
            referenceL,
            pCon,
            idEvent,
            idStatusVta,
            lotPublic,
            baseIva,
            field1,
            field2,
            field3,
            field4,
            field5,
            field6,
            field7,
            field8,
            field9,
            idGoodInLot,
            goodNumber,
      }: PaRunOperDTO) {
            try {
                  let result: any;
                  if (pCon === 1) {
                        result = await this.eatLotsRepository
                              .createQueryBuilder()
                              .update(EatLotsEntity)
                              .set({
                                    lotPublic: lotPublic,
                                    description: description,
                                    baseValue: baseValue,
                                    finalPrice: finalPrice,
                                    reference: referenceG,
                                    referential: referenceL,
                                    aIva: aIva,
                              })
                              .where('id_lote = :idLot', { idLot })
                              .execute();

                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else if (pCon === 2) {
                        const result = await this.eatLotsRepository
                              .createQueryBuilder()
                              .insert()
                              .into(EatLotsEntity)
                              .values({
                                    idLot: idLot,
                                    idStatusVta: idStatusVta,
                                    idEvent: idEvent,
                                    lotPublic: lotPublic,
                                    description: description,
                                    baseValue: baseValue,
                                    finalPrice: finalPrice,
                                    reference: referenceG,
                                    referential: referenceL,
                                    aIva: aIva,
                              })
                              .execute();
                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else if (pCon === 3) {
                        const result = await this.eatLotsRepository
                              .createQueryBuilder()
                              .delete()
                              .from('comer_lotes')
                              .where('id_lote = :idLot', { idLot })
                              .execute();
                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else if (pCon === 4) {
                        const result = await this.eatGoodByLotRepository
                              .createQueryBuilder()
                              .update(EatGoodByLotEntity)
                              .set({
                                    baseValue: baseValue,
                                    baseIva: baseIva,
                                    field1: field1,
                                    field2: field2,
                                    field3: field3,
                                    field4: field4,
                                    field5: field5,
                                    field6: field6,
                                    field7: field7,
                                    field8: field8,
                                    field9: field9,
                              })
                              .where(
                                    'id_bienxlote = :idBienxlote AND id_lote = :idLote AND no_bien = :noBien',
                                    {
                                          idBienxlote: idGoodInLot,
                                          idLote: idLot,
                                          noBien: goodNumber,
                                    },
                              )
                              .execute();
                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else if (pCon === 5) {
                        const result = await this.eatGoodByLotRepository
                              .createQueryBuilder()
                              .insert()
                              .into(EatGoodByLotEntity)
                              .values({
                                    idGoodInLot: idGoodInLot,
                                    idLot: idLot,
                                    goodNumber: goodNumber,
                                    baseValue: baseValue,
                                    baseIva: baseIva,
                                    field1: field1,
                                    field2: field2,
                                    field3: field3,
                                    field4: field4,
                                    field5: field5,
                                    field6: field6,
                                    field7: field7,
                                    field8: field8,
                                    field9: field9,
                              })
                              .execute();
                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else if (pCon === 6) {
                        result = await this.eatGoodByLotRepository
                              .createQueryBuilder('comer_bienesxlote')
                              .delete()
                              .where('id_bienxlote = :idBienxlote AND id_lote = :idLote', {
                                    idBienxlote: idGoodInLot,
                                    idLote: idLot,
                              })
                              .execute();

                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getSpLotsByUserV5({
            rfcIn,
            typeEvent,
            typeFurniture,
      }: LotsByUserV5DTO) {
            let type = typeEvent;
            let result;
            try {
                  if (type == 1) {
                        result = await this.eatEventRepository
                              .query(`SELECT DISTINCT (CL.ID_LOTE),
      CL.ID_EVENTO,
      CL.LOTE_PUBLICO LOTE,
      CL.DESCRIPCION,
      CL.PALETA,
      CEIL(CL.PRECIO_FINAL) AS PRECIO_DE_VENTA,
       COALESCE(((SELECT GARANT_ASIG FROM sera.COMER_GARANTIASXLOTE WHERE ID_EVENTO =CE.ID_EVENTO AND ID_LOTE = CL.ID_LOTE AND ID_CLIENTE = CL.ID_CLIENTE )+ (sera.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO))),0) PAGADO,
      COALESCE ( COALESCE(CEIL(CL.PRECIO_FINAL - COALESCE(SERA.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO)  ,0)), 0) - (SELECT GARANT_ASIG FROM SERA.COMER_GARANTIASXLOTE WHERE ID_EVENTO =CE.ID_EVENTO AND ID_LOTE = CL.ID_LOTE AND ID_CLIENTE = CL.ID_CLIENTE ), 0 ) PENDIENTE_DE_PAGO,
      CASE
WHEN (CL.PRECIO_FINAL - CL.ACUMULADO) = 0 THEN 'LIQUIDADO'
ELSE 'PENDIENTE'
END AS ESTATUS_DEL_PAGO,
      CE.ID_TPEVENTO,CE.CVE_PROCESO
 FROM SERA.COMER_EVENTOS CE, SERA.COMER_LOTES CL, SERA.COMER_CLIENTES CC
WHERE  CE.ID_EVENTO = CL.ID_EVENTO
      AND CC.ID_CLIENTE = CL.ID_CLIENTE
      AND CC.RFC = '${rfcIn}' 
       AND CL.ID_ESTATUSVTA = 'VEN'
       AND CE.ID_TPEVENTO =  ${typeEvent}
       AND CE.DIRECCION = '${typeFurniture}' 
      AND COALESCE(CEIL(CL.PRECIO_FINAL - COALESCE(SERA.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO),0)), 0) > 0
ORDER BY CL.ID_LOTE;`);
                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (type != 1) {
                        let result = await this.eatEventRepository
                              .query(`SELECT DISTINCT (CL.ID_LOTE),
        CL.ID_EVENTO,
        CL.LOTE_PUBLICO LOTE,
        CL.DESCRIPCION,
        CL.PALETA,
        CEIL(CL.PRECIO_FINAL) AS PRECIO_DE_VENTA,
        COALESCE(SERA.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO), 0) PAGADO,
        COALESCE(CEIL(CL.PRECIO_FINAL - COALESCE(SERA.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO),0)), 0) PENDIENTE_DE_PAGO,
        CASE 
          WHEN CL.PRECIO_FINAL - CL.ACUMULADO = 0 THEN 'LIQUIDADO'
          ELSE 'PENDIENTE'
        END AS ESTATUS_DEL_PAGO,       
        CE.ID_TPEVENTO,CE.CVE_PROCESO
   FROM SERA.COMER_EVENTOS CE, SERA.COMER_LOTES CL, SERA.COMER_CLIENTES CC
  WHERE  CE.ID_EVENTO = CL.ID_EVENTO
        AND CL.ID_CLIENTE = CC.ID_CLIENTE
        AND CL.ID_ESTATUSVTA = 'VEN'
        AND COALESCE(CEIL(CL.PRECIO_FINAL - COALESCE(SERA.COMER_PAGOS_VALIDOS(CL.ID_CLIENTE, CL.ID_LOTE, CL.ID_EVENTO),0)), 0) > 0       
        AND CE.ID_TPEVENTO = ${typeEvent}
        AND CE.DIRECCION = '${typeFurniture}'  
         AND CC.RFC = '${rfcIn}'
 ORDER BY CL.ID_LOTE;`);
                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaEatEstLots(query: PaginateQuery) {
            try {
                  return this.commonFilterService.paginateFilter<EstEstLotEntity>(
                        query,
                        this.estEstLotRepository,
                        null,
                        'changeReason',
                  );
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaEatCleanFailure(idEvent: number) {
            try {
                  let result = null;

                  if (idEvent == null) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [`Sin identificador del Evento`],
                        };
                  }
                  let cIdEstaTusVta = await this.eatEventRepository
                        .query(`SELECT ID_ESTATUSVTA       
        FROM SERA.COMER_EVENTOS
        WHERE ID_EVENTO = ${idEvent};`);
                  const { id_estatusvta } = cIdEstaTusVta[0];
                  if (id_estatusvta != 'VEN') {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [`Estatus inválido para limpiar fallo ${id_estatusvta}`],
                        };
                  }

                  let nCont1 = await this.eatLotsRepository.query(`SELECT COUNT(0)          
          FROM SERA.COMER_LOTES
          WHERE ID_EVENTO = ${idEvent}
          AND ID_ESTATUSVTA NOT IN ('VEN','DES','PREP','NDIS','CAN');`);

                  if (nCont1[0]?.count > 0) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [
                                    `${nCont1[0]?.count} Lotes con estatus inválido para limpiar el Fallo`,
                              ],
                        };
                  }
                  let nCont2 = await this.eatDetLcRepository
                        .query(`SELECT COUNT(0)            
            FROM SERA.COMER_DET_LC
           WHERE ID_LC IN (SELECT ID_LC
                             FROM SERA.COMER_LC
                            WHERE ID_EVENTO = ${idEvent})
             AND ESTATUS IN ('PAG','VAL');`);
                  if (nCont2[0]?.count > 0) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [
                                    `${nCont2[0]?.count} Se tienen pagos de Garantías de Cumplimiento o de Liquidación, no se puede limpiar el Fallo `,
                              ],
                        };
                  }
                  let nCont3 = await this.eatPayefRepository.query(`SELECT COUNT(0)      
      FROM SERA.COMER_PAGOREF
     WHERE ID_LOTE IN (SELECT ID_LOTE 
                         FROM SERA.COMER_LOTES
                        WHERE ID_EVENTO = ${idEvent})
       AND IDORDENINGRESO IS NOT NULL;`);

                  if (nCont3[0]?.count > 0) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [
                                    `${nCont3[0]?.count} Se tienen pagos con Orden de ingreso, no se puede limpiar el Fallo.  `,
                              ],
                        };
                  }
                  let nCont4 = await this.eatFactureRepositoy.query(`SELECT COUNT(0) 
      FROM sera.COMER_FACTURAS
     WHERE ID_EVENTO = ${idEvent}
       AND ID_ESTATUSFACT <> 'PREF';`);
                  if (nCont4[0]?.count > 0) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [
                                    `${nCont4[0]?.count}, Se tienen trabajadas Facturas del Evento, no se puede limpiar el Fallo.  `,
                              ],
                        };
                  }

                  let nIdTypeFailed = await this.eatEventRepository.query(` SELECT CASE
      WHEN CE.DIRECCION = 'I' THEN COALESCE(MOD(CT.ID_TIPO_FALLO, 10), 5)
      ELSE COALESCE(TRUNC(CT.ID_TIPO_FALLO / 10, 0), 5)
    END
FROM SERA.COMER_EVENTOS CE, SERA.COMER_TPEVENTOS CT
WHERE CE.ID_TPEVENTO = CT.ID_TPEVENTO
AND CE.ID_EVENTO = ${idEvent};`);
                  console.log('nIdTypeFailed', nIdTypeFailed),
                        await this.eatFactureElecRepository
                              .createQueryBuilder('CFE')
                              .delete()
                              .where('id_evento = :idEvent', { idEvent: idEvent })
                              .execute();

                  await this.eatValpagCfdiRepository
                        .createQueryBuilder()
                        .delete()
                        .from('comer_valpag_cfdi')
                        .where('id_evento = :idEvent', { idEvent: idEvent })
                        .execute();

                  await this.eatFactureElecRepository
                        .query(`DELETE FROM SERA.COMER_DETFACTURAS
    WHERE (ID_FACTURA, ID_EVENTO) IN (SELECT ID_FACTURA, ID_EVENTO
                                        FROM SERA.COMER_FACTURAS
                                       WHERE ID_EVENTO = ${idEvent});
                                       DELETE FROM SERA.COMER_FACTURAS
                                       WHERE ID_EVENTO =  ${idEvent};
                                      delete FROM SERA.COMER_BIENES_DETALLE
                                       WHERE ID_EVENTO =  ${idEvent};
                                      DELETE FROM SERA.COMER_DETALLES
                                       WHERE ID_EVENTO =  ${idEvent};
                                      DELETE FROM SERA.COMER_CABECERAS
                                       WHERE ID_EVENTO =  ${idEvent};
                                      DELETE FROM SERA.COMER_PAGOSREFGENS
                                       WHERE ID_LOTE IN (SELECT ID_LOTE
                                                           FROM SERA.COMER_LOTES
                                                          WHERE ID_EVENTO =  ${idEvent});                                    
                                                          UPDATE  SERA.COMER_PAGOREF
                                                          SET VALIDO_SISTEMA = 'A',
                                                              IDORDENINGRESO = NULL,
                                                              CONCILIADO = NULL,
                                                              FECHA_OI = NULL,
                                                              FOLIO_OI = NULL,
                                                              INDICADOR = NULL
                                                        WHERE ID_LOTE IN (SELECT ID_LOTE
                                                                            FROM SERA.COMER_LOTES
                                                                           WHERE ID_EVENTO =  ${idEvent}); `);

                  await this.eatLotsRepository
                        .createQueryBuilder()
                        .update(EatEventEntity)
                        .set({
                              idStatusVta: 'PUB',
                        })
                        .where('id_evento = :idEvent', { idEvent })
                        .execute();

                  await this.eatClientByEventRepository
                        .createQueryBuilder()
                        .delete()
                        .from('comer_clientesxevento')
                        .where('id_evento = :idEvent', { idEvent })
                        .execute();

                  await this.eatLotsRepository
                        .createQueryBuilder()
                        .update(EatLotsEntity)
                        .set({
                              idClient: null,
                              idStatusVta: 'PUB',
                              finalPrice: null,
                              priceGuarantee: null,
                              validSystem: null,
                              isScrap: null,
                              ivaLot: null,
                              idStatusvtant: null,
                              coordinationReg: null,
                              advance: null,
                              amountLiq: null,
                              amountWithoutIva: null,
                              amountNoAppIva: null,
                        })
                        .where('id_evento = :idEvent', { idEvent })
                        .execute();

                  await this.estateRepository.query(`UPDATE SERA.BIENES
        SET ESTATUS = 'CPV'
      WHERE NO_BIEN IN (SELECT NO_BIEN
                          FROM SERA.COMER_BIENESXLOTE
                         WHERE ID_LOTE IN (SELECT ID_LOTE
                                             FROM SERA.COMER_LOTES
                                            WHERE ID_EVENTO =  ${idEvent}));`);

                  await this.eatGoodByLotRepository.query(`UPDATE SERA.COMER_BIENESXLOTE
      SET PRECIO_FINAL = NULL,
          IVA_FINAL = NULL,
          PRECIO_SIN_IVA = NULL,
          MONTO_APP_IVA = NULL,
          MONTO_NOAPP_IVA = NULL,
          ESTATUS_ANT = 'CPV',
          ESTATUS_COMER = 'CPV'
    WHERE ID_LOTE IN (SELECT ID_LOTE
                        FROM SERA.COMER_LOTES
                       WHERE ID_EVENTO =  ${idEvent});`);

                  await this.eatDetLcRepository.query(` DELETE FROM SERA.COMER_DET_LC
      WHERE ID_LC IN (SELECT ID_LC
                        FROM SERA.COMER_LC
                       WHERE ID_EVENTO =  ${idEvent});`);

                  await this.eatLcRepository
                        .createQueryBuilder('el')
                        .delete()
                        .where('id_evento = :idEvent', { idEvent })
                        .execute();

                  if (nIdTypeFailed[0]?.coalesce == 1) {
                        await this.eatEventsTmpRepository
                              .createQueryBuilder()
                              .update(EatEventsTmpEntity)
                              .set({ statusVtaId: 'PUB' })
                              .where('id_evento = :idEvent', { idEvent })
                              .execute();
                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Fue actualizado idEstatusVta a PUB '],
                        };
                  } else {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: ['No Fue actualizado el idEstatusVta'],
                        };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaCreteLotCanc(noBien: number) {
            try {
                  let exist = await this.eatLotsRepository.query(`SELECT COUNT(1)
      FROM SERA.COMER_EVENTOS CE
      WHERE ID_TPEVENTO=10
      AND  EXISTS(SELECT 1
            FROM SERA.COMER_LOTES CL
              WHERE CE.ID_EVENTO=CL.ID_EVENTO
                AND ID_ESTATUSVTA='VALV' 
                  AND  EXISTS (SELECT 1
            FROM SERA.COMER_BIENESXLOTE BL
              WHERE BL.ID_LOTE=CL.ID_LOTE
                AND EXISTS (SELECT 1 FROM SERA.BIENES B
                  WHERE B.NO_BIEN=BL.NO_BIEN
                    AND NO_BIEN=${noBien}
                    AND ESTATUS='CPV') ));`);
                  if (exist[0]?.count == 0) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: [`existen 0 elemento`],
                        };
                  }
                  if (exist[0]?.count == 1) {
                        let vIdEventEnc = await this.eatEventRepository.query(`
        SELECT ID_EVENTO
        FROM SERA.COMER_EVENTOS CE  
        WHERE ID_TPEVENTO=10
        AND  EXISTS(SELECT 1
              FROM SERA.COMER_LOTES CL
                WHERE CE.ID_EVENTO=CL.ID_EVENTO
                  AND ID_ESTATUSVTA='VALV' 
                    AND  EXISTS (SELECT 1
              FROM SERA.COMER_BIENESXLOTE BL
                WHERE BL.ID_LOTE=CL.ID_LOTE
                  AND EXISTS (SELECT 1 FROM SERA.BIENES B
                    WHERE B.NO_BIEN=BL.NO_BIEN
                      AND NO_BIEN=${noBien}
                        AND ESTATUS='CPV') ));`);
                        let result1 = await this.eatGoodByLotRepository
                              .query(` SELECT ID_LOTE_REMESA,ID_EVENTO_REMESA,ID_LOTE
        FROM SERA.COMER_BIENESXLOTE BL
        WHERE EXISTS (SELECT 1 
                                      FROM SERA.COMER_LOTES CL
                                      WHERE CL.ID_LOTE=BL.ID_LOTE
                                      AND ID_EVENTO=${vIdEventEnc[0]?.id_evento}
                                       )     
     AND NO_BIEN=${noBien};`);
                        const { id_lote_remesa, id_evento_remesa, id_lote } = result1[0];
                        let result2 = await this.eatGoodByLotRepository
                              .query(`SELECT ID_LOTE_COMER,ID_EVENTO_COMER,ID_LOTE
          FROM sera.COMER_BIENESXLOTE BL
          WHERE EXISTS (SELECT 1 
                                        FROM SERA.COMER_LOTES CL
                                        WHERE CL.ID_LOTE=BL.ID_LOTE
                                        AND ID_EVENTO=${id_evento_remesa}
                                         )     
       AND NO_BIEN=${noBien};`);
                        if (vIdEventEnc[0]?.id_evento == result2[0]?.id_evento_comer) {
                              await this.paDeleteRevPcv({
                                    pNoBien: noBien,
                                    pIdevento: vIdEventEnc[0]?.id_evento,
                                    pTpEvento: '10',
                                    pLote: id_lote,
                              });
                              await this.eatGoodByLotRepository
                                    .query(`DELETE FROM COMER_BIENESXLOTE BL
          WHERE BL.NO_BIEN = ${noBien}
                AND EXISTS (SELECT 1
                              FROM COMER_LOTES CL
                                WHERE BL.ID_LOTE = CL.ID_LOTE
                                  AND EXISTS (SELECT 1
                                    FROM COMER_EVENTOS CE
                                      WHERE CE.ID_EVENTO =CL.ID_EVENTO
                                        AND CE.ID_EVENTO =  ${id_evento_remesa}))
                                          AND ID_LOTE= ${id_lote_remesa};`);
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['el proceso se a ejecutado correctamente'],
                              };
                        } else {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['el id_evento y el id_evento_comer no coinciden'],
                              };
                        }
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getLotsAf({ idEvent, idLot, lotPublic, pCon, noBien }: GetLotAfDTO) {
            let result = null;
            try {
                  if (pCon == 1) {
                        result = await this.eatLotsRepository
                              .createQueryBuilder('clo')
                              .select([
                                    'clo.idLot',
                                    'clo.lotPublic',
                                    'clo.description',
                                    'clo.baseValue',
                                    'clo.idClient',
                                    'cli.rfc',
                                    'cli.nomRazon',
                                    'clo.priceGuarantee',
                                    'clo.noTransferee',
                                    'clo.finalPrice',
                                    'clo.reference',
                                    'clo.referential',
                                    'clo.idStatusvtant',
                                    'clo.idClient',
                                    'clo.noTransferee',
                                    'clo.isAssigned',
                                    'clo.isScrap',
                                    'clo.aIva',
                              ])
                              .leftJoin(EatClientEntity, 'cli', 'clo.idClient = cli.idClient')
                              .where('clo.idEvent = :idEvent', { idEvent })
                              .orderBy('clo.lotPublic', 'ASC')
                              .getMany();

                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 2) {
                        result = await this.eatGoodByLotRepository
                              .createQueryBuilder('cbl')
                              .select([
                                    'cbl.goodNumber',
                                    'cbl.idGoodInLot',
                                    'cbl.idLot',
                                    'b.descripcion',
                                    'cbl.transferNumber',
                                    'b.estatus',
                                    'cbl.quantity',
                                    'b.valor_avaluo',
                                    'cbl.baseValue',
                                    'cbl.baseIva',
                                    'cbl.finalPrice',
                                    'cbl.priceWithoutIva',
                                    'cbl.finalIva',
                                    'cbl.field1',
                                    'cbl.field2',
                                    'cbl.field3',
                                    'cbl.field4',
                                    'cbl.field5',
                                    'cbl.field6',
                                    'cbl.field7',
                                    'cbl.field8',
                                    'cbl.field9',
                                    'cbl.appraisalDate',
                                    'cbl.creationDate',
                                    'cbl.invoiceNumber',
                                    'cbl.invoiceDate',
                                    'cbl.origin',
                                    'cbl.countryOfOrigin',
                                    'cbl.commercialStatus',
                                    'cbl.cylinderNumber',
                                    'cbl.peritajeJurCve',
                                    'cbl.amountWithoutVat',
                              ])
                              .leftJoin(EstateEntity, 'b', 'cbl.goodNumber = b.goodNumber')
                              .leftJoin(EatLotsEntity, 'clo', 'cbl.idLot = clo.idLot')
                              .where('id_evento = :idEvent', { idEvent })
                              .andWhere('lote_publico = :lotPublic', { lotPublic })
                              .getMany();

                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 3) {
                        let result = await this.eatGoodByLotRepository
                              .createQueryBuilder('cbl')
                              .select('COUNT(cbl.goodNumber)', 'numbienes')
                              .where('id_lote = :idLot', { idLot })
                              .getRawOne();
                        if (result.numbienes > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 4) {
                        result = await this.eatLotsRepository
                              .createQueryBuilder('cl')
                              .select('MAX(cl.idLot) + 1', 'idLot')
                              .getRawOne();

                        if (result.idLot > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 5) {
                        result = await this.eatLotsRepository
                              .createQueryBuilder('cl')
                              .select('count(*) ', 'idLot')
                              .where('cl.idEvent = :idEvent', { idEvent })
                              .andWhere('cl.idLot <> :idLot', { idLot })
                              .andWhere('cl.lotPublic = :lotPublic', {
                                    lotPublic,
                              })
                              .getRawOne();
                        if (result.idLot > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 6) {
                        console.log(pCon, idLot);
                        result = await this.eatGoodByLotRepository
                              .createQueryBuilder('cbl')
                              .select('max(cbl.idGoodInLot) + 1 ', 'idGoodInLot')
                              .where('id_lote = :idLot', { idLot })
                              .getRawOne();

                        if (result.idGoodInLot > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 7) {
                        result = await this.eatRejectedGoodRepository
                              .createQueryBuilder('CBR')
                              .select([
                                    'CBR.rejectedAssetId',
                                    'CBR.idEvent',
                                    'CBR.goodNumber',
                                    'CBR.origin',
                                    'CBR.description',
                                    'CBR.status',
                                    'CBR.cause',
                                    'CBR.idEvent',
                                    'CBR.lotPublic',
                                    'CBR.rejectedBy',
                                    'CBR.sourceLot',
                              ])
                              .where('id_evento = :idEvent', { idEvent })
                              .orderBy('id_bienrechazado', 'DESC')
                              .getRawMany();
                        if (result.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 8) {
                        result = await this.estateRepository
                              .query(`select b.no_bien as goodNumber,  
        b.descripcion as description, 
        b.estatus as status, 
        b.cantidad as quantity,
        b.valor_avaluo as valueAppraisal,
        b.fec_avaluo_vig as  appraisalValidDate
        from sera.bienes b
        where b.no_bien in (${noBien}) and  
        b.no_bien not in(Select no_bien from sera.comer_bienesxlote where id_lote   
      in(Select id_lote from sera.comer_lotes where id_evento = ${idEvent}))`);
                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
                  if (pCon == 9) {
                        result = await this.eatGoodByLotRepository.query(`SELECT cbl.no_bien,
        cbl.id_bienxlote as idGoodInLot,
        cbl.id_lote as idLot,
        b.descripcion as descripcion,
        cbl.no_transferente as transferNumber,
        b.estatus as status,
        cbl.cantidad,
        b.valor_avaluo as valueAppraisal,
        cbl.valor_base,
        cbl.iva_base,
        cbl.precio_final,
        cbl.precio_sin_iva,
        cbl.iva_final,
        cbl.campo1,
        cbl.campo2,
        cbl.campo3,
        cbl.campo4,
        cbl.campo5,
        cbl.campo6,
        cbl.campo7,
        cbl.campo8,
        cbl.campo9,
        cbl.fecha_avaluo,
        cbl.fecha_creacion,
        cbl.no_factura,
        cbl.fecha_factura,
        cbl.procedencia,
        cbl.pais_procedencia,
        cbl.estatus_comer,
        cbl.no_cilindros,
        cbl.cve_peritaje_jur,
        cbl.monto_noapp_iva
   FROM sera.comer_bienesxlote cbl
        LEFT OUTER JOIN sera.bienes b ON cbl.no_bien = b.no_bien
        LEFT OUTER JOIN sera.comer_lotes clo ON cbl.id_lote = clo.id_lote
  WHERE id_evento = ${idEvent} AND lote_publico = ${idEvent}`);

                        if (result) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: result,
                                    count: result.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      //  CREATE OR REPLACE PROCEDURE "SERA"."PA_REG_PCT" (PEVENTO IN NUMBER) IS
      // current of

      async metodo(idlot: string) {
            return await this.eatGoodByLotRepository
                  .createQueryBuilder('cbxl')
                  .select('cbxl.baseValue as basevalue')
                  .where('cbxl.idLot = :idlot', { idlot })
                  .getRawMany();
      }

      async getPaRegPct(idEvent: number) {
            try {
                  let n_CONT1 = 0;
                  let n_PORCENT = 0;
                  let n_SUMPORCENT = 0;

                  const regQuery = await this.eatLotsRepository
                        .createQueryBuilder('cl')
                        .select([
                              'cl.idLot as idlot',
                              'cl.baseValue as basevalue',
                              'cl.idStatusVta as idstatusvta',
                        ])
                        .where('id_evento = :idEvent', { idEvent })
                        .andWhere('id_estatusvta = :idStatusVta', { idStatusVta: 'VEN' })
                        .getRawMany();

                  if (regQuery.length == 0) {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: ['No existen registros!'],
                        };
                  }
                  for (const reg of regQuery) {
                        const { idlot, basevalue } = reg;
                        const countQuery = this.eatGoodByLotRepository
                              .createQueryBuilder('bienesxLote')
                              .select('COUNT(*)', 'count')
                              .where('bienesxLote.idLot = :idlot', { idlot });
                        const { count } = await countQuery.getRawOne();

                        for (const re_BIE of await this.metodo(idlot)) {
                              if (count == n_CONT1) {
                                    n_PORCENT = 1 - n_SUMPORCENT;
                              } else {
                                    n_PORCENT = re_BIE.basevalue / basevalue;
                              }
                              n_SUMPORCENT += n_PORCENT;
                              let resp = await this.metodo(idlot);
                              if (resp[0]?.basevalue != null) {
                                    await this.eatGoodByLotRepository
                                          .query(`UPDATE SERA.COMER_BIENESXLOTE CB
            SET PCTSLOTE = ${n_PORCENT}
            WHERE CB.VALOR_BASE = ${resp[0]?.basevalue}`);
                              }
                        }
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getEatGoodsWithoutRemittance({ idLot, idEvent }: EatWellAfterTableDTO) {
            try {
                  const resp = await this.eatGoodByLotRepository.query(`
    SELECT NO_BIEN,     ID_LOTE,       VALOR_BASE,      PRECIO_FINAL,   IVA_FINAL,  CAMPO1,CAMPO2,
    ESTATUS_ANT, ESTATUS_COMER, NO_TRANSFERENTE, FECHA_CREACION, NO_FACTURA, FECHA_FACTURA
    FROM SERA.COMER_BIENESXLOTE CB
    WHERE ID_EVENTO_REMESA IS NULL
    AND CB.ID_LOTE = COALESCE(${idLot},CB.ID_LOTE) 
    AND EXISTS(SELECT 1 FROM SERA.COMER_LOTES CL
            WHERE ID_EVENTO = ${idEvent}
              AND CL.ID_LOTE = COALESCE(${idLot},CB.ID_LOTE)
              AND CL.ID_ESTATUSVTA = 'PAG')
    `);

                  if (resp.length == 0) {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: ['No existen registros'],
                        };
                  }

                  for (const bR of resp) {
                        const cn_delegacion = await this.eatLotsRepository
                              .createQueryBuilder('CL')
                              .select('CL.noDelegation as no_delegacion')
                              .where('CL.idLot = :idLot', { idLot: bR.id_lote })
                              .getRawOne();

                        const cnEvent = await this.eatEventRepository
                              .query(`SELECT MAX(ID_EVENTO) 
          FROM SERA.COMER_EVENTOS CE
         WHERE ID_TPEVENTO = 6 AND NO_DELEGACION = ${cn_delegacion.no_delegacion}
           AND EXISTS (SELECT 1 FROM SERA.COMER_LOTES CL 
                        WHERE ID_EVENTO = CE.ID_EVENTO
                          AND EXISTS (SELECT 1 FROM SERA.COMER_BIENESXLOTE CB
                                       WHERE CB.ID_LOTE = CL.ID_LOTE) );`);

                        const cnLote = await this.eatLotsRepository.query(`SELECT MAX(ID_LOTE)
        as CN_LOTE
        FROM sera.COMER_LOTES CL
       WHERE ID_EVENTO = ${cnEvent[0]?.max}
         AND EXISTS (SELECT 1 FROM sera.COMER_BIENESXLOTE CB
                                     WHERE CB.ID_LOTE = CL.ID_LOTE);`);

                        const cnBienXLote = await this.eatGoodByLotRepository
                              .createQueryBuilder('cbxl')
                              .select('MAX(ID_LOTE)')
                              .where('ID_LOTE = :cnLote', { cnLote: cnLote[0]?.cn_lote })
                              .getRawOne();

                        if (cnLote[0]?.cn_lote != null) {
                              await this.eatGoodByLotRepository
                                    .createQueryBuilder()
                                    .insert()
                                    .into(EatGoodByLotEntity)
                                    .values({
                                          idLot: cnLote[0]?.cn_lote,
                                          idGoodInLot: cnBienXLote.max,
                                          goodNumber: bR.no_bien,
                                          baseValue: bR.valor_base,
                                          finalPrice: bR.precio_final,
                                          finalIva: bR.iva_final,
                                          field1: bR.campo1,
                                          field2: bR.campo2,
                                          previousStatus: bR.estatus_ant,
                                          commercialStatus: bR.estatus_comer,
                                          transferNumber: bR.no_transferente,
                                          creationDate: bR.fecha_creacion,
                                          invoiceNumber: bR.no_factura,
                                          invoiceDate: bR.fecha_factura,
                                          commercialLotId: bR.id_lote_comer,
                                          commercialEventId: idEvent,
                                    })
                                    .execute();
                              await this.eatGoodByLotRepository
                                    .createQueryBuilder()
                                    .update(EatGoodByLotEntity)
                                    .set({
                                          remittanceEventId: cnEvent[0]?.max,
                                          remittanceLotId: cnLote[0]?.cn_lote,
                                          remittanceGoodInLotId: cnBienXLote.max,
                                    })
                                    .where('ID_LOTE = :ID_LOTE', { ID_LOTE: bR.id_lote })
                                    .execute();
                        }
                  }
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: ['Se ejecuto la consulta correctamente!'],
                  };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaRegFinalPrices(pEvent: number) {
            let dif = null;
            let viva = null;
            try {
                  const eatLots = await this.eatLotsRepository
                        .createQueryBuilder('cl')
                        .select(['cl.idLot', 'cl.lotPublic', 'cl.finalPrice'])
                        .where('cl.idEvent = :pEvent', { pEvent })
                        .getRawMany();

                  viva = await this.eatParametersModRepository
                        .createQueryBuilder('epm')
                        .select(['CAST(VALOR AS NUMERIC)/100'])
                        .where('PARAMETRO = :parametro', { parametro: 'IVA' })
                        .getOne();

                  const direc = await this.eatEventRepository
                        .createQueryBuilder('ce')
                        .select(['ce.address'])
                        .where('id_evento = :pEvent', { pEvent })
                        .getOne();

                  if (direc.address == 'M') {
                        const eatLotsResult = await this.eatLotsRepository
                              .query(`SELECT CL.ID_LOTE, CL.PRECIO_FINAL, SB.PRECIO_FINAL as SUM_PFIN
        FROM SERA.COMER_LOTES CL,
             (SELECT ID_LOTE, SUM(PRECIO_FINAL) PRECIO_FINAL,
                     SUM(COALESCE(IVA_BASE,0)) 
                FROM SERA.COMER_BIENESXLOTE CB
               GROUP BY ID_LOTE) SB
       WHERE CL.ID_LOTE       = SB.ID_LOTE
         AND CL.PRECIO_FINAL != SB.PRECIO_FINAL
         AND CL.ID_ESTATUSVTA NOT IN ('CAN','DES')
         AND CL.ID_EVENTO     = ${pEvent}`);

                        for (const reg of eatLotsResult) {
                              if (reg.precio_final > reg.sum_pfin) {
                                    dif = reg.precio_final - reg.sum_pfin;
                                    await this.eatGoodByLotRepository
                                          .query(`UPDATE SERA.COMER_BIENESXLOTE CB
            SET PRECIO_FINAL   = PRECIO_FINAL - ${dif},
                PRECIO_SIN_IVA = PRECIO_SIN_IVA - ${dif}
          WHERE ID_LOTE  = ${reg.id_lote}
            AND ID_BIENXLOTE = (SELECT MIN(ID_BIENXLOTE) 
                                  FROM SERA.COMER_BIENESXLOTE MB
                                 WHERE MB.ID_LOTE = CB.ID_LOTE
                                   AND PCTSLOTE  != (SELECT MAX(PCTSLOTE) 
                                                       FROM SERA.COMER_BIENESXLOTE BM
                                                      WHERE BM.ID_LOTE = MB.ID_LOTE));
            `);
                              } else if (reg.precio_final < reg.sum_pfin) {
                                    dif = reg.sum_pfin - reg.precio_final;

                                    await this.eatGoodByLotRepository
                                          .query(`   UPDATE SERA.COMER_BIENESXLOTE CB
            SET PRECIO_FINAL   = PRECIO_FINAL - ${dif},
                PRECIO_SIN_IVA = (PRECIO_FINAL - ${dif})/(${viva}+1),
                IVA_FINAL      = (PRECIO_FINAL - ${dif}) - ((PRECIO_FINAL - ${dif})/(${viva}+1))
          WHERE ID_LOTE  = ${reg.id_lote}
            AND ID_BIENXLOTE = (SELECT MIN(ID_BIENXLOTE) 
                                  FROM SERA.COMER_BIENESXLOTE MB
                                 WHERE MB.ID_LOTE = CB.ID_LOTE
                                   AND PCTSLOTE  != (SELECT MAX(PCTSLOTE) 
                                                       FROM SERA.COMER_BIENESXLOTE BM
                                                      WHERE BM.ID_LOTE = MB.ID_LOTE));`);
                              }
                        }
                        const data = await this.eatLotsRepository
                              .query(` UPDATE SERA.COMER_LOTES CL
        SET (MONTO_SIN_IVA, IVA_LOTE,     
             PORC_APP_IVA,  PORC_NOAPP_IVA) =
     (SELECT SUM(CB.PRECIO_SIN_IVA), SUM(CB.IVA_FINAL),
             1 PORC_APP_IVA,         0 PORC_NOAPP_IVA
        FROM SERA.COMER_BIENESXLOTE CB
       WHERE CL.ID_LOTE   = CB.ID_LOTE)                            
      WHERE CL.ID_EVENTO     = ${pEvent}
        AND CL.ID_ESTATUSVTA = 'VEN'; `);
                        if (data) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: data,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else {
                        const eatLotsResult = await this.eatLotsRepository
                              .query(`SELECT CL.ID_LOTE, CL.PRECIO_FINAL, SB.PRECIO_FINAL SUM_PFIN, SB.IVA_CERO
        FROM SERA.COMER_LOTES CL,
            (SELECT ID_LOTE, SUM(PRECIO_FINAL) PRECIO_FINAL,
                    SUM(COALESCE(IVA_BASE,0)) IVA_CERO
               FROM SERA.COMER_BIENESXLOTE CB
              GROUP BY ID_LOTE) SB
       WHERE CL.ID_LOTE       = SB.ID_LOTE
         AND CL.PRECIO_FINAL != SB.PRECIO_FINAL
         AND CL.ID_ESTATUSVTA NOT IN ('CAN','DES')
         AND CL.ID_EVENTO     = ${pEvent}`);

                        for (const dat of eatLotsResult) {
                              dif = dat.precio_final - dat.sum_pfin;

                              if (dat.precio_final > dat.sum_pfin) {
                                    dif = dat.precio_final - dat.sum_pfin;
                                    if (dat.IVA_CERO > 0) {
                                          await this.eatGoodByLotRepository
                                                .query(` UPDATE SERA.COMER_BIENESXLOTE CB
            SET PRECIO_FINAL   = PRECIO_FINAL + ${dif},
                IVA_FINAL      = IVA_FINAL    + ${dif},
                PRECIO_SIN_IVA = PRECIO_SIN_IVA - ${dif}
          WHERE ID_LOTE  = ${dat}.ID_LOTE
            AND ID_BIENXLOTE = (SELECT MIN(ID_BIENXLOTE) 
                                  FROM SERA.COMER_BIENESXLOTE MB
                                 WHERE MB.ID_LOTE = CB.ID_LOTE
                                   AND PCTSLOTE  != (SELECT MAX(PCTSLOTE) 
                                                       FROM SERA.COMER_BIENESXLOTE BM
                                                      WHERE BM.ID_LOTE = MB.ID_LOTE));`);
                                    } else {
                                          await this.eatGoodByLotRepository
                                                .query(`UPDATE SERA.COMER_BIENESXLOTE CB
              SET PRECIO_FINAL    = PRECIO_FINAL    + ${dif},
                  MONTO_NOAPP_IVA = MONTO_NOAPP_IVA + ${dif},
                  PRECIO_SIN_IVA  = PRECIO_SIN_IVA  + ${dif}
            WHERE ID_LOTE  = ${dat.id_lote}
              AND ID_BIENXLOTE = (SELECT MIN(ID_BIENXLOTE) 
                                    FROM SERA.COMER_BIENESXLOTE MB
                                   WHERE MB.ID_LOTE = CB.ID_LOTE
                                     AND PCTSLOTE  != (SELECT MAX(PCTSLOTE) 
                                                         FROM SERA.COMER_BIENESXLOTE BM
                                                        WHERE BM.ID_LOTE = MB.ID_LOTE));`);
                                    }
                              } else if (dat.precio_final < dat.sum_pfin) {
                                    dif = dat.sum_pfin - dat.precio_final;

                                    await this.eatGoodByLotRepository
                                          .query(`UPDATE SERA.COMER_BIENESXLOTE CB
            SET PRECIO_FINAL    = PRECIO_FINAL    - ${dif},
                MONTO_NOAPP_IVA = MONTO_NOAPP_IVA - ${dif},
                PRECIO_SIN_IVA  = PRECIO_SIN_IVA - ${dif}
          WHERE ID_LOTE  = DAT.ID_LOTE
            AND ID_BIENXLOTE = (SELECT MIN(ID_BIENXLOTE) 
                                  FROM SERA.COMER_BIENESXLOTE MB
                                 WHERE MB.ID_LOTE = CB.ID_LOTE
                                   AND PCTSLOTE  != (SELECT MAX(PCTSLOTE) 
                                                       FROM SERA.COMER_BIENESXLOTE BM
                                                      WHERE BM.ID_LOTE = MB.ID_LOTE));`);
                              }
                        }

                        const data = await this.eatLotsRepository
                              .query(`UPDATE sera.COMER_LOTES CL
        SET (  MONTO_APP_IVA, MONTO_NOAPP_IVA, MONTO_SIN_IVA, IVA_LOTE,
               PORC_APP_IVA, PORC_NOAPP_IVA) = 
       (SELECT SUM(MONTO_APP_IVA), SUM(MONTO_NOAPP_IVA), SUM(PRECIO_SIN_IVA), SUM(IVA_FINAL),
               SUM(MONTO_APP_IVA+IVA_FINAL)/CL.PRECIO_FINAL, 1 - SUM(MONTO_APP_IVA+IVA_FINAL)/CL.PRECIO_FINAL
          FROM sera.COMER_BIENESXLOTE CB
         WHERE CB.ID_LOTE = CL.ID_LOTE)
      WHERE ID_EVENTO = ${pEvent}
        AND CL.ID_ESTATUSVTA NOT IN ('CAN','DES'); `);
                        if (data) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                              };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async paGarantByLotFile(pevento: number) {
            try {
                  let rMonto;
                  let tGara;
                  let fa1Sum = 0;
                  let vTpevento;
                  let vGara;
                  let vAnti;
                  let vLit;
                  let porc;

                  let auxi = await this.eatParametersModRepository
                        .createQueryBuilder('table')
                        .select(['CAST(table.worth AS numeric)/100 as porc'])
                        .where('PARAMETRO = :parametro', { parametro: 'PAGLICIT' })
                        .getRawOne();
                  porc = auxi?.porc;

                  const eatRefGaranties = await this.eatRefGarantiesRepository
                        .query(`SELECT CR.ID_EVENTO as idevent, CR.ID_CLIENTE as idclient, SUM(MONTO) AS SUM_M
        FROM sera.COMER_REF_GARANTIAS CR
        WHERE CR.ID_EVENTO = ${pevento}
          AND SUBSTR(REF_GSAE,1,1) = '1'
        GROUP BY CR.ID_EVENTO, CR.ID_CLIENTE`);

                  if (eatRefGaranties.length != 0) {
                        for (const reg of eatRefGaranties) {
                              tGara = await this.eatLotsRepository
                                    .createQueryBuilder('el')
                                    .select(['SUM(PRECIO_GARANTIA) '])
                                    .where('ID_EVENTO =:pevento', { pevento })
                                    .andWhere('ID_CLIENTE = :idClient', { idClient: reg.idclient })
                                    .andWhere('ID_ESTATUSVTA = :idStatusVta', { idStatusVta: 'VEN' })
                                    .andWhere('PRECIO_FINAL >= PRECIO_GARANTIA')
                                    .getRawOne();

                              const eatLotResult = await this.eatLotsRepository
                                    .createQueryBuilder('el')
                                    .select([
                                          'el.idLot as idlot',
                                          'el.finalPrice as finalprice',
                                          'el.priceGuarantee as priceguarantee',
                                          'el.idClient as idclient',
                                          `(el.finalPrice * ${porc}) as garaser`,
                                    ])
                                    .where('ID_ESTATUSVTA = :idStatusVta', { idStatusVta: 'VEN' })
                                    .andWhere('ID_EVENTO =:pevento', { pevento })
                                    .andWhere('ID_CLIENTE = :idClient', { idClient: reg.idclient })
                                    .andWhere('PRECIO_FINAL < PRECIO_GARANTIA')
                                    .getRawMany();
                              for (const fa1 of eatLotResult) {
                                    vGara = fa1.garaser;
                                    await this.eatLotsRepository
                                          .createQueryBuilder()
                                          .update(EatLotsEntity)
                                          .set({
                                                finalPrice: fa1.finalprice,
                                                priceGuarantee: fa1.finalprice,
                                                advance: fa1.finalprice,
                                                amountLiq: 0,
                                                assignedGuarantee: vGara,
                                                idClient: fa1.idclient,
                                          })
                                          .where('id_lote =:idLot', { idLot: fa1.idlot })
                                          .execute();
                                    fa1Sum = fa1Sum + fa1.finalprice;
                              }

                              if (
                                    tGara.sum + fa1Sum < reg.sum_m ||
                                    tGara.sum + fa1Sum + fa1Sum == reg.sum_m
                              ) {
                                    rMonto = reg.sum_m - tGara.sum + fa1Sum;
                              } else {
                                    rMonto = reg.sum_m - tGara.sum + fa1Sum;

                                    const eatLotsResult2 = await this.eatLotsRepository
                                          .createQueryBuilder('el')
                                          .select([
                                                'el.idLot as idlot',
                                                'el.priceGuarantee as priceguarantee',
                                                'el.finalPrice as finalprice',
                                                `(el.finalPrice * ${porc}) as garaser`,
                                          ])
                                          .where('ID_EVENTO =:pevent', { pevent: pevento })
                                          .andWhere('ID_CLIENTE =:idClient', { idClient: reg.idclient })
                                          .orderBy('LOTE_PUBLICO', 'ASC')
                                          .getRawMany();

                                    for (const lot of eatLotsResult2) {
                                          vGara = lot.garaser;
                                          await this.eatLotsRepository
                                                .createQueryBuilder()
                                                .update(EatLotsEntity)
                                                .set({
                                                      idStatusVta: 'PREP',
                                                      advance: 0,
                                                      amountLiq: lot.finalprice,
                                                      priceGuarantee: lot.priceguarantee,
                                                      assignedGuarantee: vGara,
                                                })
                                                .where('ID_LOTE =:idLote', { idLote: lot.idlot })
                                                .execute();
                                    }
                              }

                              const eatLotsResult3 = await this.eatLotsRepository
                                    .query(`SELECT TL.LOTE_PUBLICO as lotpublic, TL.PRECIO_FINAL as finalprice,
      TL.ID_LOTE as idlot, TL.PRECIO_GARANTIA as priceguarantee,
     (TL.PRECIO_FINAL * ${porc}) as GARASER
 FROM sera.COMER_LOTES TL
WHERE ID_CLIENTE    = ${reg.idclient}
  AND ID_EVENTO     = ${pevento}
  AND ID_ESTATUSVTA = 'VEN'
  AND NOT EXISTS (SELECT 1 FROM sera.COMER_LOTES CL
                   WHERE CL.ID_LOTE    = TL.ID_LOTE
                     AND CL.MONTO_LIQ IS NOT NULL)
ORDER BY 2 DESC`);
                              for (const dat of eatLotsResult3) {
                                    if (rMonto > 0) {
                                          if (dat.finalprice < rMonto || (dat.finalprice = rMonto)) {
                                                vGara = dat.garaser;
                                                await this.eatLotsRepository
                                                      .createQueryBuilder()
                                                      .update(EatLotsEntity)
                                                      .set({
                                                            finalPrice: dat.finalprice,
                                                            advance: dat.finalprice,
                                                            priceGuarantee: dat.priceguarantee,
                                                            assignedGuarantee: vGara,
                                                            amountLiq: 0,
                                                      })
                                                      .where('ID_LOTE = :idLot', { idLot: dat.idlot })
                                                      .execute();
                                                rMonto = rMonto - dat.finalprice - dat.priceguarantee;
                                          } else {
                                                if (rMonto + dat.priceguarantee > dat.finalprice) {
                                                      vGara = dat.garaser;
                                                      await this.eatLotsRepository
                                                            .createQueryBuilder()
                                                            .update(EatLotsEntity)
                                                            .set({
                                                                  finalPrice: dat.finalprice,
                                                                  advance: dat.finalprice,
                                                                  priceGuarantee: dat.priceguarantee,
                                                                  assignedGuarantee: vGara,
                                                                  amountLiq: 0,
                                                            })
                                                            .where('ID_LOTE =:idLot', { idLot: dat.idlot })
                                                            .execute();
                                                } else {
                                                      vAnti = rMonto + dat.priceguarantee;
                                                      vGara = dat.garaser - vAnti;
                                                      vLit = dat.finalprice - vGara + vAnti;
                                                      await this.eatLotsRepository
                                                            .createQueryBuilder()
                                                            .update(EatLotsEntity)
                                                            .set({
                                                                  finalPrice: dat.finalprice,
                                                                  advance: vAnti,
                                                                  priceGuarantee: dat.priceguarantee,
                                                                  amountLiq: vLit,
                                                                  assignedGuarantee: vGara,
                                                            })
                                                            .where('ID_LOTE =:idLot ', { idLot: dat.idlot })
                                                            .execute();
                                                      rMonto = 0;
                                                }
                                          }
                                    } else {
                                          vTpevento = await this.eatEventRepository
                                                .createQueryBuilder('ee')
                                                .select(['ee.idEventType as id_tpevento'])
                                                .where('id_evento =:idEvent', { idEvent: pevento })
                                                .getRawOne();

                                          if (vTpevento.id_tpevento == 2) {
                                                vAnti = dat.priceguarantee;
                                                vGara = dat.garaser - vAnti;
                                                if (vAnti >= dat.garaser) {
                                                      vGara = 0;
                                                }
                                                vLit = dat.finalprice - vGara + vAnti;
                                                await this.eatLotsRepository
                                                      .createQueryBuilder()
                                                      .update(EatLotsEntity)
                                                      .set({
                                                            finalPrice: dat.finalprice,
                                                            advance: dat.priceguarantee,
                                                            priceGuarantee: dat.priceguarantee,
                                                            amountLiq: vLit,
                                                            assignedGuarantee: vGara,
                                                      })
                                                      .where('ID_LOTE =:idLot', { idLot: dat.idlot })
                                                      .execute();
                                          } else {
                                                vLit = dat.finalprice - (vGara + vAnti);
                                                vAnti = dat.priceguarantee;
                                                vGara = dat.garaser - vAnti;

                                                await this.eatLotsRepository
                                                      .createQueryBuilder()
                                                      .update(EatLotsEntity)
                                                      .set({
                                                            finalPrice: dat.finalprice,
                                                            advance: dat.priceguarantee,
                                                            priceGuarantee: dat.priceguarantee,
                                                            amountLiq: vLit,
                                                            assignedGuarantee: vGara,
                                                      })
                                                      .where('ID_LOTE =:idLot', { idLot: dat.idlot })
                                                      .execute();
                                          }
                                    }
                              }
                              fa1Sum = 0;
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                              };
                        }
                  } else {
                        return {
                              statusCode: HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
                              message: ['No existen registros!'],
                        };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async paSalesEatLots({
            action,
            idEvent,
            type,
            lotPublic,
      }: PaSalesEatLotsDTO) {
            let clm;
            let cli;
            let clmd;
            let clid;
            let ptype;

            clm = await this.tmpLotsEatRepository
                  .createQueryBuilder('table')
                  .select([
                        'table.idEvent as idEvent',
                        'table.idLot as idLot',
                        'table.lotPublic as lotPublic',
                        'table.finalPrice as finalPrice',
                        'table.guaranteePrice as guaranteePrice',
                        'table.idClient as idClient',
                        'table.regionalCoordination as regionalCoordination',
                        'table.lotIva as lotIva',
                        'table.scrap as scrap',
                        'table.statusId as statusId',
                  ])
                  .where('ID_EVENTO =:idEvent', { idEvent })
                  .andWhere('ID_ESTATUSVTA =:ID_ESTATUSVTA', { ID_ESTATUSVTA: 'VEN' })
                  .andWhere('LOTE_PUBLICO = COALESCE(:lotPublic, LOTE_PUBLICO)', {
                        lotPublic,
                  })
                  .getRawMany();

            console.log('CLM', clm);

            cli = await this.tmpLotsEatRepository
                  .createQueryBuilder('table')
                  .select([
                        'table.idEvent as idEvent',
                        'table.idLot as idLot',
                        'table.lotPublic as lotPublic',
                        'table.finalPrice as finalPrice',
                        'table.guaranteePrice as guaranteePrice',
                        'table.idClient as idClient',
                        'table.regionalCoordination as regionalCoordination',
                        'table.lotIva as lotIva',
                        'table.scrap as scrap',
                        'table.statusId as statusId',
                  ])
                  .where('ID_EVENTO =:idEvent', { idEvent })
                  .andWhere('ID_ESTATUSVTA =:ID_ESTATUSVTA ', { ID_ESTATUSVTA: 'VEN' })
                  .andWhere('LOTE_PUBLICO   = COALESCE(:lotPublic, LOTE_PUBLICO)', {
                        lotPublic,
                  })
                  .getRawMany();

            console.log('CLI', cli);

            clmd = await this.tmpLotsEatRepository
                  .createQueryBuilder('table')
                  .select([
                        'table.idEvent as idevent',
                        'table.idLot as idlot',
                        'table.lotPublic as lotpublic',
                        'table.finalPrice as finalprice',
                        'table.guaranteePrice as guaranteeprice',
                        'table.idClient as idclient',
                        'table.regionalCoordination as regionalcoordination',
                        'table.lotIva as lotiva',
                        'table.scrap as scrap',
                        'table.statusId as statusid',
                  ])
                  .where('ID_EVENTO =:idEvent', { idEvent })
                  .andWhere('ID_ESTATUSVTA =:ID_ESTATUSVTA ', { ID_ESTATUSVTA: 'DES' })
                  .andWhere('LOTE_PUBLICO   = COALESCE(:lotPublic, LOTE_PUBLICO)', {
                        lotPublic,
                  })
                  .getRawMany();

            console.log('CLMD', clmd);

            clid = await this.tmpLotsEatRepository
                  .createQueryBuilder('table')
                  .select([
                        'table.idEvent as idEvent',
                        'table.idLot as idLot',
                        'table.lotPublic as lotPublic',
                        'table.finalPrice as finalPrice',
                        'table.guaranteePrice as guaranteePrice',
                        'table.idClient as idClient',
                        'table.regionalCoordination as regionalCoordination',
                        'table.lotIva as lotIva',
                        'table.scrap as scrap',
                        'table.statusId as statusId',
                  ])
                  .where('ID_EVENTO =:idEvent', { idEvent })
                  .andWhere('ID_ESTATUSVTA =:ID_ESTATUSVTA ', { ID_ESTATUSVTA: 'DES' })
                  .andWhere('LOTE_PUBLICO   = COALESCE(:P_LOTE_PUBLICO, LOTE_PUBLICO)', {
                        P_LOTE_PUBLICO: lotPublic,
                  })
                  .getRawMany();

            console.log('CLID', clid);

            if (action == 'U') {
                  if (type == 'M') {
                        if (clm.length != 0) {
                              for (const c_clm of clm) {
                                    if (
                                          c_clm.idclient != null &&
                                          c_clm.finalprice > 0 &&
                                          c_clm.guaranteeprice > 0
                                    ) {
                                          await this.eatLotsRepository.query(`UPDATE sera.COMER_LOTES LOT
                      SET LOT.COORDINACION_REG = ${c_clm.regionalcoordination},
                          LOT.ID_CLIENTE       = ${c_clm.idclient},
                          LOT.PRECIO_GARANTIA  = ${c_clm.guaranteeprice},
                          LOT.PRECIO_FINAL     = ${c_clm.finalprice},
                          LOT.IVA_LOTE         = ${c_clm.lotiva},
                          LOT.ID_ESTATUSVTA    = 'VEN',
                          IDESTATUSVTANT       = LOT.ID_ESTATUSVTA, 
                          VALIDO_SISTEMA       = 'S', 
                          LOT.ESCHATARRA       = SUBSTR(UPPER(COALESCE(${c_clm.scrap},'N')),1,1)
                    WHERE LOT.ID_EVENTO        = ${idEvent}
                      AND LOT.LOTE_PUBLICO     = ${c_clm.lotpublic};`);
                                    } else {
                                          await this.eatLotsRepository.query(`UPDATE sera.COMER_LOTES LOT
                      SET LOT.COORDINACION_REG = ${c_clm.regionalcoordination},
                          LOT.ID_ESTATUSVTA    = 'NDIS', 
                          IDESTATUSVTANT       = LOT.ID_ESTATUSVTA, 
                          ID_CLIENTE           = NULL 
                    WHERE LOT.ID_EVENTO        = ${idEvent}
                      AND LOT.LOTE_PUBLICO     = ${c_clm.lotpublic};`);
                                    }
                              }
                        }

                        if (clmd.length != 0) {
                              for (const REG of clmd) {
                                    await this.eatLotsRepository.query(`UPDATE sera.COMER_LOTES LOT
               SET ID_CLIENTE        = NULL,
                   VALIDO_SISTEMA = 'D',
                   IDESTATUSVTANT = ID_ESTATUSVTA,
                   ID_ESTATUSVTA = 'DES'
             WHERE ID_EVENTO    = ${idEvent}
               AND LOTE_PUBLICO = ${REG.lotpublic};`);
                              }
                        }

                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                        };
                  } else if (ptype == 'I') {
                        if (cli.length != 0) {
                              for (const C_CLI of cli) {
                                    if (
                                          C_CLI.idclient != null &&
                                          C_CLI.finalprice > 0 &&
                                          C_CLI.guaranteeprice > 0
                                    ) {
                                          await this.eatLotsRepository.query(`UPDATE SERA.COMER_LOTES LOT
                     SET LOT.ID_CLIENTE      = ${C_CLI.idclient},
                         LOT.ID_ESTATUSVTA   = 'VEN',
                         IDESTATUSVTANT       = LOT.ID_ESTATUSVTA, 
                         VALIDO_SISTEMA       = 'S', 
                         LOT.PRECIO_GARANTIA = C_CLI.PRECIO_GARANTIA,
                         LOT.PRECIO_FINAL     = ${C_CLI.finalprice} 
                   WHERE LOT.ID_EVENTO     = ${idEvent}
                     AND LOT.LOTE_PUBLICO = ${C_CLI.lotpublic};`);
                                    } else {
                                          await this.eatLotsRepository.query(`UPDATE SERA.COMER_LOTES CL
                     SET ID_CLIENTE        = NULL,
                         ID_ESTATUSVTA = 'NDIS', 
                         IDESTATUSVTANT    = ID_ESTATUSVTA 
                   WHERE ID_EVENTO    =  ${idEvent}
                     AND LOTE_PUBLICO =  ${C_CLI.lotpublic};`);
                                    }
                              }
                        }

                        if (clid.length != 0) {
                              for (const reg of clid) {
                                    await this.eatLotsRepository.query(`UPDATE COMER_LOTES LOT
                SET ID_CLIENTE     = NULL,
                    VALIDO_SISTEMA = 'D',
                    IDESTATUSVTANT = ID_ESTATUSVTA,
                    ID_ESTATUSVTA  = 'DES'
              WHERE ID_EVENTO    = ${idEvent}
                AND LOTE_PUBLICO = ${reg.lotpublic};`);
                              }
                        }

                        return {
                              statusCode: HttpStatus.OK,
                              message: ['Se ejecuto la consulta correctamente!'],
                        };
                  }
            }

            try {
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getPaCreateLots({
            amount,
            effectiveDate,
            idClient,
            lotPublic,
      }: PaCreateLotsDTO) {
            try {
                  let valueBase;
                  let baseValueWithoutIva;
                  let idLotRecover;
                  let idLcOut;
                  let refetential;
                  let recover;

                  let id_event_r = await this.eatEventRepository
                        .createQueryBuilder('ee')
                        .select('ee.idEvent as ideventr ')
                        .where('ID_TPEVENTO = 11')
                        .andWhere(
                              'CURRENT_DATE BETWEEN CAST(FEC_EVENTO AS DATE) AND CAST(FEC_FALLO AS DATE)',
                        )
                        .andWhere("(ID_ESTATUSVTA='PREP' OR ID_ESTATUSVTA='PAG')")
                        .getRawOne();

                  if (id_event_r == undefined) {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: ['no existen registros!'],
                        };
                  }

                  if (id_event_r.ideventr != null) {
                        valueBase = amount;
                        if (valueBase != null) {
                              baseValueWithoutIva = valueBase / 1.16;
                              if (lotPublic != null) {
                                    await this.eatLotsRepository.query(`INSERT INTO SERA.COMER_LOTES(
              ID_LOTE,
              ID_ESTATUSVTA,
              ID_EVENTO,
              LOTE_PUBLICO,
              DESCRIPCION,
              VALOR_BASE,
              NO_TRANSFERENTE,
              ID_CLIENTE,
              PRECIO_AVALUO_REF,
              PRECIO_GARANTIA,
              FECHA_ENTREGA,
              PRECIO_FINAL,
              REFERENCIAG,
              REFERENCIAL,
              ACUMULADO,
              VALIDO_SISTEMA,
              IVA_LOTE, 
              MONTO_APP_IVA,
              MONTO_NOAPP_IVA,
              PORC_APP_IVA,
              PORC_NOAPP_IVA,
              COORDINACION_REG,
              COORDINADOR_REG,
              DATO_FISC_MAND,
              UBICACION,
              ANTICIPO,
              MONTO_SIN_IVA,
              NOOFICIONOTIFICA,
              IMPRIMENOTIFICA,
              IDESTATUSVTANT,
              NUM_BIENES,
              EXCEDE_FALTA,
              ESASIGNADO,
              ESCHATARRA,
              SOLICITA,
              MONTO_RETENIDO,
              NO_DELEGACION,
              LOTE_ORIGEN,
              CUBRELOTES,
              PALETA,
              GARANTIA_ASIG,
              MONTO_LIQ,
              FASE)
              VALUES(
              nextval('SERA.SEQ_COMER_LOTES'), 
              'PREP',
              ${id_event_r.ideventr},
              ${lotPublic},
              'NUEVO LOTE - VENTA DE BASES', 
              ${baseValueWithoutIva}, 
              NULL,
              ${idClient}, 
              NULL,
              NULL, 
              NULL, 
              ${valueBase}, 
              '${refetential}', 
              '${refetential}', 
              NULL,
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL,  
              NULL, 
              'PREP', 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL, 
              NULL,
              NULL, 
              NULL, 
              NULL, 
              NULL);`);

                                    let auxi = await this.eatLotsRepository
                                          .createQueryBuilder('el')
                                          .select('MAX(ID_LOTE) as max')
                                          .where('ID_EVENTO = :idEventR', { idEventR: id_event_r.ideventr })
                                          .getRawOne();

                                    idLotRecover = auxi.max;
                                    await lastValueFrom(
                                          this.clineteProxyCaptureline.send(
                                                { cmd: 'paRegistrarComerLc' },
                                                {
                                                      idEventIn: id_event_r.ideventr,
                                                      idLotIn: idLotRecover,
                                                      idClientIn: idClient,
                                                },
                                          ),
                                    );

                                    idLcOut = await this.eatLcRepository
                                          .createQueryBuilder('el')
                                          .select('MAX(ID_LC) as max')
                                          .where('ID_EVENTO =:idEventR', { idEventR: id_event_r.ideventr })
                                          .getRawOne();

                                    await lastValueFrom(
                                          this.clineteProxyCaptureline.send(
                                                { cmd: 'paRegistrarComerDetLc' },
                                                {
                                                      idLcIn: idLcOut.max,
                                                      idEventIn: id_event_r.ideventr,
                                                      idLotIn: idLotRecover,
                                                      idClientIn: idClient,
                                                      amountIn: valueBase,
                                                      validityDateIn: effectiveDate,
                                                },
                                          ),
                                    );
                                    return {
                                          statusCode: HttpStatus.OK,
                                          message: ['Se ejecuto la consulta correctamente!'],
                                    };
                              }
                        } else {
                              return {
                                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                                    message: [`No posee un monto`],
                              };
                        }
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      //  CREATE OR REPLACE PROCEDURE "SERA"."LLENA_DATOS_COMER" (${PAUDSID}    NUMBER,
      async getFillDataEat({ pdirec, pEvent, paudsid }: FillDateEatDTO) {
            try {
                  let lid;
                  let bid;
                  let f_crea;
                  let v_consulta = null;
                  let INSERTA = null;
                  let V_BASE;
                  let v_sin_iva;
                  let v_iva;
                  let viva;
                  let n_ID_TPEVENTO;
                  let v_CONIVA;
                  let n_IDAVA;
                  let n_IDDTAVA;

                  let C_E = await this.eatGoodsExelRepository.query(` SELECT B.NO_BIEN,
    B.NO_CLASIF_BIEN,
    CE.DESC_LOTE,
    CE.LOTE_PUBLICO,
    B.CANTIDAD,
    CE.ANEXO,
    coalesce  (CE.VALOR_BASE, 0) VALOR_BASE,
    B.DESCRIPCION DESC_BIEN,
    coalesce(CE.A_IVA,'NA')A_IVA
FROM sera.COMER_BIENESEXCEL CE, sera.BIENES B WHERE B.NO_BIEN = CE.NO_BIEN AND AUDSID = ${paudsid} 
ORDER BY LOTE_PUBLICO;`);

                  let auxi = await this.eatEventRepository
                        .createQueryBuilder('ee')
                        .select('ee.idEventType as ideventtype')
                        .where('ID_EVENTO =:ID_EVENTO', { ID_EVENTO: pEvent })
                        .getRawOne();

                  n_ID_TPEVENTO = auxi.ideventtype;

                  if (n_ID_TPEVENTO == undefined) {
                        n_ID_TPEVENTO = 0;
                  }

                  let auxi2 = await this.eatParametersModRepository
                        .createQueryBuilder('cp')
                        .addSelect('CAST(cp.worth AS NUMERIC)/100 as worth ')
                        .where('PARAMETRO = :parametro', { parametro: 'IVA' })
                        .getRawOne();
                  viva = auxi2.worth;
                  f_crea = new Date().toLocaleDateString('es-ES');
                  let auxi3 = await this.eatParametersModRepository
                        .createQueryBuilder('cp')
                        .addSelect('UPPER(cp.worth) as worth')
                        .where('PARAMETRO = :parametro', { parametro: 'CHCONIVA' })
                        .getRawOne();

                  v_CONIVA = auxi3.worth;

                  if (v_CONIVA == 'N') {
                        v_sin_iva = 0;
                        v_iva = 0;
                  }
                  for (const reg of C_E) {
                        let auxi4 = await this.eatLotsRepository
                              .query(`SELECT ID_LOTE as idlot   
   FROM sera.COMER_LOTES CL
  WHERE CL.LOTE_PUBLICO = ${reg.lote_publico} AND CL.ID_EVENTO = ${pEvent};`);

                        lid = auxi4[0]?.idlot;

                        let auxi5 = await this.eatParametersModRepository
                              .query(` SELECT MAX (ID_BIENXLOTE) as idgoodinlot 
       FROM sera.COMER_BIENESXLOTE CB
      WHERE ID_LOTE = ${lid}`);

                        bid = auxi5[0]?.idgoodinlot;

                        bid = (bid ?? 0) + 1;

                        if (bid == undefined) {
                              bid.idgoodinlot = 1;
                        }

                        if (pdirec == 'M' || pdirec == 'A') {
                              if (
                                    reg.valor_base != null &&
                                    reg.valor_base > 0 /*COALESCE(REG.valor_base,0) > 0*/
                              ) {
                                    V_BASE = reg.valor_base;

                                    if (v_CONIVA == 'S') {
                                          v_sin_iva = Math.round(V_BASE / (viva + 1)).toFixed(2);
                                          v_iva = V_BASE - v_sin_iva;
                                    }
                              } else {
                                    if (v_CONIVA == 'N') {
                                          const resp = await this.eatParametersModRepository
                                                .query(`SELECT 0 as num,                    
                     ID_AVALUO,
                     ID_DETAVALUO              
                FROM SERA.V_COMER_AVALUO_OPER
               WHERE NO_BIEN = ${reg.no_bien};`);

                                          V_BASE = resp.num;
                                          n_IDAVA = resp.id_avaluo;
                                          n_IDDTAVA = resp.id_detavaluo;

                                          if (
                                                resp.num == undefined &&
                                                resp.id_avaluo == undefined &&
                                                resp.id_detavaluo == undefined
                                          ) {
                                                V_BASE = 0.01;
                                          }
                                    } else {
                                          const resp = await this.eatParametersModRepository
                                                .query(` SELECT COALESCE (VRI_IVA, round(VRI*1.16,2)) as valor_base,
                     VRI,
                     COALESCE((VRI_IVA - VRI),0) as iva,
                     ID_AVALUO,
                     ID_DETAVALUO
                FROM SERA.V_COMER_AVALUO_OPER
               WHERE NO_BIEN = ${reg.no_bien};`);

                                          V_BASE = resp[0]?.valor_base;
                                          v_sin_iva = resp[0]?.vri;
                                          v_iva = resp[0]?.iva;
                                          n_IDAVA = resp[0]?.id_avaluo;
                                          n_IDDTAVA = resp[0]?.id_detavaluo;

                                          if (
                                                resp.valor_base == undefined &&
                                                resp.vri == undefined &&
                                                resp.iva == undefined &&
                                                resp.id_avaluo == undefined &&
                                                resp.id_detavaluo == undefined
                                          ) {
                                                V_BASE = 0.01;
                                                v_iva = 0;
                                                v_sin_iva = 0.01;
                                          }
                                    }
                              }

                              for (const DAT of await this.eatParametersModRepository
                                    .query(`SELECT B_VAL, CB_COL
                      FROM SERA.COMER_BIENESCOL  
                      WHERE NO_CLASIF_BIEN = ${reg.no_clasif_bien}
            AND DIRECCION = '${pdirec}'
                    `)) {
                                    if (v_consulta != null) {
                                          v_consulta = `${v_consulta}  ', '  ${DAT.b_val}`;
                                    } else {
                                          v_consulta = DAT.b_val;
                                    }

                                    if (INSERTA != null) {
                                          INSERTA = `${INSERTA}  ', '  ${DAT.cb_col}`;
                                    } else {
                                          INSERTA = DAT.cb_col;
                                    }
                              }
                        }

                        if (v_consulta != null) {
                              v_consulta = `SELECT ${bid}, ${lid}, TO_DATE('${f_crea}','DD-MM-YYYY'), 'SUBSTR(${reg.desc_lote},1,255)', '${reg.cantidad}', '${reg.no_bien}', '${reg.anexo}', '${V_BASE}','${v_iva}','${v_sin_iva}', '${reg.a_iva}', DESCRIPCION , ${v_consulta} FROM SERA.BIENES WHERE NO_BIEN = '${reg.no_bien}'`;
                              INSERTA = `INSERT INTO SERA.COMER_BIENESXLOTE (ID_BIENXLOTE, ID_LOTE, FECHA_CREACION, DESCRIPCION_LOTE, CANTIDAD, NO_BIEN, ANEXO, VALOR_BASE, IVA_BASE, PRECIO_SIN_IVA,A_IVA, CAMPO1, ${INSERTA}) (${v_consulta})`;
                        } else {
                              v_consulta = `SELECT ${bid}, ${lid}, TO_DATE('${f_crea}','DD-MM-YYYY'), 'SUBSTR(${reg.desc_lote},1,255)', ${reg.cantidad}, '${reg.no_bien}', '${reg.anexo}', '${V_BASE}','${v_iva}','${v_sin_iva}', '${reg.a_iva}', DESCRIPCION FROM SERA.BIENES WHERE NO_BIEN = '${reg.no_bien}'`;
                              INSERTA = `INSERT INTO SERA.COMER_BIENESXLOTE (ID_BIENXLOTE, ID_LOTE, FECHA_CREACION, DESCRIPCION_LOTE, CANTIDAD, NO_BIEN, ANEXO, VALOR_BASE, IVA_BASE, PRECIO_SIN_IVA,A_IVA, CAMPO1) (${v_consulta});`;
                        }

                        console.log('AQUI');
                        n_ID_TPEVENTO = 3;

                        if (Number(n_ID_TPEVENTO) != 6 && Number(n_ID_TPEVENTO) != 10) {
                              let aux6 = await this.eatParametersModRepository.query(`SELECT 
     ID_AVALUO,
     ID_DETAVALUO
        FROM sera.V_COMER_AVALUO_OPER
       WHERE NO_BIEN = ${reg.no_bien};`);

                              n_IDAVA = aux6[0]?.id_avaluo;
                              n_IDDTAVA = aux6[0]?.id_detavaluo;

                              await lastValueFrom(
                                    this.clienteProxyAppraise.send(
                                          { cmd: 'pDescuentoAvaluoCmd' },
                                          {
                                                appraisalId: n_IDAVA,
                                                detavaluationId: n_IDDTAVA,
                                                eventId: pEvent,
                                                lotId: lid,
                                                goodNumber: reg.no_bien,
                                                address: 'M',
                                          },
                                    ),
                              );

                              await lastValueFrom(
                                    this.clienteProxyAppraise.send(
                                          { cmd: 'pDescuentoAvaluoCmd' },
                                          {
                                                appraisalId: n_IDAVA,
                                                detavaluationId: n_IDDTAVA,
                                                eventId: pEvent,
                                                lotId: lid,
                                                goodNumber: reg.no_bien,
                                                address: 'M',
                                          },
                                    ),
                              );
                        }

                        if (INSERTA != null) {
                              await this.eatGoodByLotRepository.query(`${INSERTA}`);
                        }

                        INSERTA = null;
                        v_consulta = null;
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: ['Se ejecuto la consulta correctamente!'],
                  };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async getLotPag(rfcIn: string) {
            try {
                  let dateFailure = new Date();
                  let validDays;
                  let dateEffective = new Date();
                  let dateToday = new Date();
                  let events = '';
                  let paidLots = '';
                  let finalPrice;
                  let mtlq;
                  let montoGara;
                  let amountGaraLiq;
                  let vQuery = '';

                  let lByLots;
                  let vRfc;

                  lByLots = await this.eatEventRepository
                        .query(`SELECT DISTINCT( CE.ID_EVENTO) as idevent, CE.DIRECCION as address, CE.ID_TPEVENTO as ideventtype, CE.FEC_FALLO as falldate, CC.ID_CLIENTE as idclient 
        FROM sera.COMER_EVENTOS CE , sera.COMER_LOTES CL, sera.COMER_CLIENTES CC
        WHERE CE.ID_EVENTO = CL.ID_EVENTO AND CL.ID_CLIENTE=CC.ID_CLIENTE AND  CC.RFC = '${rfcIn}';`);

                  for (const reg of lByLots) {
                        dateFailure = reg.falldate;
                        if (reg.address == 'I' && reg.ideventtype == 4) {
                              validDays = await this.eatParametersModRepository
                                    .createQueryBuilder('ep')
                                    .select('ep.worth as worth')
                                    .where('PARAMETRO = :PARAMETRO', { PARAMETRO: 'SEI_LQE' })
                                    .getRawOne();
                              const date = new Date(dateFailure);
                              const newDateFailure = date.toISOString().substring(0, 10);

                              let auxi = await this.eatLotsRepository.query(
                                    `SELECT DATE(sera.OBTENER_POST_FECHA_HABIL('${newDateFailure}', ${validDays.worth}) ) ;`,
                              );
                              dateEffective = auxi[0]?.date;
                              if (
                                    new Date(dateToday) >= new Date(dateFailure) &&
                                    new Date(dateToday) <= new Date(dateEffective)
                              ) {
                                    if (events != null) {
                                          events += ',';
                                    }
                                    for (const reg1 of await this.eatLotsRepository
                                          .createQueryBuilder('el')
                                          .select(['el.idLot as idlot ', 'el.finalPrice as finalprice'])
                                          .where('ID_EVENTO = :idEvent ', { idEvent: reg.idevent })
                                          .andWhere('ID_CLIENTE =:idClient ', { idClient: reg.idclient })
                                          .getRawMany()) {
                                          montoGara = await this.eatParametersModRepository
                                                .query(`SELECT SUM(MONTO) as amount
                              FROM sera.COMER_PAGOREF 
                              WHERE REFERENCIA IN (SELECT REF_GSAE||REF_GBANCO 
                                                                      FROM sera.COMER_REF_GARANTIAS 
                   
                                                                      WHERE ID_LOTE =${reg1.idlot} AND ID_CLIENTE= ${reg.idclient});`);
                                          if (montoGara.amount == undefined) {
                                                montoGara.amount = 0;
                                          }
                                          amountGaraLiq = await this.eatParametersModRepository
                                                .query(`SELECT SUM(MONTO)  as amount
                              FROM sera.COMER_PAGOREF 
                              WHERE REFERENCIA IN(SELECT CDL.LC_SAE||CDL.LC_BANCO  
                                                                  FROM sera.COMER_DET_LC CDL, sera.COMER_LC CLC
                                                                  WHERE CDL.ID_LC= CLC.ID_LC AND CLC.ID_CLIENTE = ${reg.idclient} 
                                                                  AND CLC.ID_LOTE =${reg1.idlot});`);
                                          if (amountGaraLiq.amount == undefined) {
                                                amountGaraLiq.amount = 0;
                                          }

                                          finalPrice = montoGara.amount + amountGaraLiq.amount;

                                          if (finalPrice >= reg1.finalprice) {
                                                if (paidLots != null) {
                                                      paidLots += ',';
                                                }

                                                paidLots += reg1.idlot;
                                          }
                                    }
                                    events += reg.idevent;
                              }
                        } else if (reg.address == 'M' && reg.ideventtype == 4) {
                              validDays = await this.eatParametersModRepository
                                    .createQueryBuilder('ep')
                                    .select('ep.worth as worth')
                                    .where('PARAMETRO =:PARAMETRO', { PARAMETRO: 'SEM_LQE' })
                                    .getRawOne();

                              const date = new Date(dateFailure);
                              const newDateFailure = date.toISOString().substring(0, 10);

                              let auxi = await this.eatLotsRepository.query(
                                    `SELECT DATE(sera.OBTENER_POST_FECHA_HABIL('${newDateFailure}', ${validDays.worth}) ) ;`,
                              );
                              dateEffective = auxi[0]?.date;

                              if (
                                    new Date(dateToday) >= new Date(dateFailure) &&
                                    new Date(dateToday) <= new Date(dateEffective)
                              ) {
                                    if (events != null) {
                                          events += ',';
                                    }

                                    for (const reg1 of await this.eatLotsRepository
                                          .createQueryBuilder('el')
                                          .select(['ID_LOTE as idlot', 'PRECIO_FINAL as finalPrice'])
                                          .where('ID_EVENTO = :ID_EVENTO', { ID_EVENTO: reg.idevent })
                                          .andWhere('ID_CLIENTE = :ID_CLIENTE', {
                                                ID_CLIENTE: reg.idclient,
                                          })
                                          .getRawMany()) {
                                          montoGara = await this.eatParametersModRepository
                                                .query(`    SELECT SUM(MONTO) as amount
                              FROM sera.COMER_PAGOREF 
                              WHERE REFERENCIA IN (SELECT REF_GSAE||REF_GBANCO 
                                                                      FROM sera.COMER_REF_GARANTIAS 
                                                                      WHERE ID_LOTE =${reg1.idlot} AND ID_CLIENTE= ${reg.idclient});`);

                                          if (montoGara.amount == undefined) {
                                                montoGara.amount = 0;
                                          }

                                          amountGaraLiq = await this.eatPagosRefgensRepository
                                                .query(` SELECT SUM(MONTO)  as amount
                              FROM sera.COMER_PAGOREF 
                              WHERE REFERENCIA IN(SELECT CDL.LC_SAE||CDL.LC_BANCO  
                                                                  FROM sera.COMER_DET_LC CDL, sera.COMER_LC CLC
                                                                  WHERE CDL.ID_LC= CLC.ID_LC AND CLC.ID_CLIENTE = ${reg.idclient} 
                                                                  AND CLC.ID_LOTE =${reg1.idlot});`);
                                          if (amountGaraLiq.amount == undefined) {
                                                amountGaraLiq.amount = 0;
                                          }

                                          finalPrice = montoGara.amount + amountGaraLiq.amount;

                                          if (finalPrice >= reg1.finalprice) {
                                                if (paidLots != null) {
                                                      paidLots += ',';
                                                }
                                                paidLots += reg1.idlot;
                                          }
                                    }

                                    events += reg.idevent;
                              }
                        } else if (reg.address == 'M' && reg.ideventtype == 1) {
                              validDays = await this.eatParametersModRepository
                                    .createQueryBuilder('ep')
                                    .select('ep.worth as worth')
                                    .where('PARAMETRO = :PARAMETRO', { PARAMETRO: 'SPM_LQE' })
                                    .getRawOne();

                              const date = new Date(dateFailure);
                              const newDateFailure = date.toISOString().substring(0, 10);

                              let auxi = await this.eatLotsRepository.query(
                                    `SELECT DATE(sera.OBTENER_POST_FECHA_HABIL('${newDateFailure}', ${validDays.worth}) ) ;`,
                              );
                              dateEffective = auxi[0]?.date;

                              if (
                                    new Date(dateToday) >= new Date(dateFailure) &&
                                    new Date(dateToday) <= new Date(dateEffective)
                              ) {
                                    if (events != null) {
                                          events += ',';
                                    }

                                    for (const reg1 of await this.eatLotsRepository
                                          .createQueryBuilder('el')
                                          .addSelect(['el.idLot as idlot', 'el.amountLiq as amountliq'])
                                          .where('ID_EVENTO =:ID_EVENTO', { ID_EVENTO: reg.idevent })
                                          .andWhere('ID_CLIENTE = :ID_CLIENTE', {
                                                ID_CLIENTE: reg.idclient,
                                          })
                                          .getRawMany()) {
                                          mtlq = await this.eatLotsRepository
                                                .createQueryBuilder('el')
                                                .select('el.amountLiq as amountLiq')
                                                .where('ID_LOTE=:ID_LOTE ', { ID_LOTE: reg1.idlot })
                                                .getRawOne();

                                          if (mtlq.amountliq == undefined) {
                                                mtlq.amountliq = 0;
                                          }

                                          if (mtlq.amountliq == 0) {
                                                if (paidLots != null) {
                                                      paidLots = paidLots + ',';
                                                }
                                                paidLots += reg1.idlot;
                                          } else {
                                                montoGara = await this.eatPayefRepository
                                                      .query(`    SELECT SUM(MONTO) as amount
                              FROM sera.COMER_PAGOREF 
                              WHERE REFERENCIA IN (SELECT REF_GSAE||REF_GBANCO 
                                                                      FROM sera.COMER_REF_GARANTIAS 
                                                                      WHERE ID_LOTE =${reg1.idlot} AND ID_CLIENTE= ${reg.idclient});`);
                                                if (montoGara.amount == undefined) {
                                                      montoGara.amount = 0;
                                                }

                                                amountGaraLiq = await this.eatPayefRepository
                                                      .query(`SELECT SUM(MONTO) as amount
                                  FROM sera.COMER_PAGOREF 
                                  WHERE REFERENCIA IN(SELECT CDL.LC_SAE||CDL.LC_BANCO  
                                                                      FROM sera.COMER_DET_LC CDL, sera.COMER_LC CLC
                                                                      WHERE CDL.ID_LC= CLC.ID_LC AND CLC.ID_CLIENTE = ${reg.idclient} 
                                                                      AND CLC.ID_LOTE =${reg1.idlot});`);

                                                if (amountGaraLiq.amount == undefined) {
                                                      amountGaraLiq.amount = 0;
                                                }

                                                finalPrice = montoGara.amount + amountGaraLiq.amount;

                                                if (finalPrice >= reg1.amountliq) {
                                                      if (paidLots != null) {
                                                            paidLots = paidLots + ',';
                                                      }
                                                      paidLots = paidLots + reg1.idlot;
                                                }
                                          }
                                    }
                                    events = events + reg.idevent;
                              }
                        }
                  }

                  vRfc = rfcIn;
                  events = events.substring(1);
                  paidLots = paidLots.substring(1);

                  if (events != '' && paidLots != '') {
                        vQuery = await this.eatLotsRepository.query(`SELECT CL.ID_EVENTO,
      CE.CVE_PROCESO,
       CL.LOTE_PUBLICO,
       CL.PRECIO_FINAL,
       'PAGADO'  AS ESTATUS
  FROM sera.COMER_LOTES CL, sera.COMER_EVENTOS CE, sera.COMER_CLIENTES CC
 WHERE  CE.ID_EVENTO IN (${events})
       AND CE.ID_EVENTO = CL.ID_EVENTO
       AND CC.ID_CLIENTE = CL.ID_CLIENTE
       AND CL.ID_LOTE IN (${paidLots})
       AND CC.RFC = '${vRfc}'
       AND EXISTS (SELECT 1
                      FROM sera.COMER_EVENTOS_TPROCESO CETP
                      WHERE CETP.ID_EVENTO = CE.ID_EVENTO
                      AND CETP.FASE = 2
                  )   
  ORDER BY CL.ID_EVENTO`);

                        if (vQuery.length > 0) {
                              return {
                                    statusCode: HttpStatus.OK,
                                    message: ['Se ejecuto la consulta correctamente!'],
                                    data: vQuery,
                                    count: vQuery.length,
                              };
                        } else
                              return {
                                    statusCode: HttpStatus.BAD_REQUEST,
                                    message: ['No se encontraron registros!'],
                                    data: [],
                                    count: 0,
                              };
                  } else {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: ['No se encontraron registros!'],
                        };
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      //  CREATE OR REPLACE PROCEDURE "SERA"."LLENA_TMP_COMER" (${PEVENTO} IN NUMBER, pdirec IN VARCHAR2) IS
      async getFillTmpEat({ pEvent, pdirec }: GetFillTmpEatDT) {
            try {
                  let _pdirec;
                  _pdirec = pdirec;
                  console.log(typeof _pdirec);

                  let v_consulta = null;
                  let inserta = null;
                  let vclasif;
                  let nidbl = 1;
                  let nidl;
                  let n_stipo;
                  let n_sstipo;
                  let desc_trans;
                  let ir = 0;
                  let v_ubicacion;
                  let v_cest;
                  let n_cest;
                  let exLote;
                  let SIG;
                  let tpm_idevent;
                  let tmp_cp;
                  let tmp_ff;
                  let tmp_fe;
                  let tmp_tp;
                  let tmp_d;
                  let tmp_lugar;
                  let tmp_idvta;
                  let TMP_DELEGACION;
                  let tmp_lvb;
                  let tmp_anexo;
                  let vl_monto_seriedad;
                  let desc_trasn;
                  let b_eve;
                  let cl;
                  let resp;

                  b_eve = await this.eatGoodByLotRepository
                        .query(`SELECT CB.NO_BIEN, CL.LOTE_PUBLICO,CL.DESCRIPCION, CL.ID_LOTE, CB.ID_BIENXLOTE, CB.VALOR_BASE
      FROM SERA.COMER_BIENESXLOTE CB, SERA.COMER_LOTES CL
     WHERE CB.ID_LOTE   = CL.ID_LOTE 
     AND CL.ID_EVENTO = ${pEvent}     
       ORDER BY LOTE_PUBLICO ASC;  `);

                  cl = await this.eatLotsRepository
                        .createQueryBuilder('el')
                        .select([
                              'ID_LOTE',
                              'ID_ESTATUSVTA',
                              'ID_EVENTO',
                              'LOTE_PUBLICO',
                              'VALOR_BASE',
                              'REFERENCIAG',
                              'NO_TRANSFERENTE',
                              'DESCRIPCION',
                              'PRECIO_GARANTIA',
                        ])
                        .where('ID_EVENTO =:ID_EVENTO ', { ID_EVENTO: pEvent })
                        .getRawMany();

                  await this.eatEventRepository
                        .createQueryBuilder()
                        .update(EatEventEntity)
                        .set({
                              idStatusVta: 'PUB',
                        })
                        .where('ID_EVENTO =:ID_EVENTO ', { ID_EVENTO: pEvent })
                        .execute();
                  await this.eatLotsRepository
                        .createQueryBuilder()
                        .update(EatLotsEntity)
                        .set({
                              idStatusVta: 'PUB',
                        })
                        .where('ID_EVENTO =:ID_EVENTO ', { ID_EVENTO: pEvent })
                        .execute();

                  resp = await this.eatEventRepository
                        .query(`SELECT ID_EVENTO, CVE_PROCESO, COALESCE(FECHA_CIERRE_EVENTO, FEC_FALLO) as fecha, ID_TPEVENTO, DIRECCION, LUGAR, ID_ESTATUSVTA,
      FEC_EVENTO FROM SERA.COMER_EVENTOS WHERE ID_EVENTO = ${pEvent};`);
                  tpm_idevent = resp[0]?.id_evento;
                  tmp_cp = resp[0]?.cve_proceso;
                  tmp_ff = resp[0]?.fecha;
                  tmp_tp = resp[0]?.id_tpevento;
                  tmp_d = resp[0]?.direccion;
                  tmp_lugar = resp[0]?.lugar;
                  tmp_idvta = resp[0]?.id_estatusvta;
                  tmp_fe = resp[0]?.fec_evento;

                  await this.eatEventsTmpRepository
                        .createQueryBuilder()
                        .insert()
                        .into(EatEventsTmpEntity)
                        .values({
                              eventId: tpm_idevent,
                              processCve: tmp_cp,
                              fecFailed: tmp_ff,
                              eventDate: tmp_fe,
                              tpeventId: tmp_tp,
                              address: tmp_d,
                              place: tmp_d,
                              statusVtaId: tmp_idvta,
                        })
                        .execute();

                  for (const DAT of cl) {
                        exLote = await this.tmpLotsEatRepository.query(`SELECT 1 as number
             FROM COMER.TMP_LOTES_COMER
            WHERE ID_LOTE   = ${DAT.lote_publico}
              AND ID_EVENTO = ${DAT.id_evento};`);

                        SIG = 'S';

                        if (exLote.length == 0) {
                              SIG = 'S';
                        }

                        if (SIG == 'S') {
                              vl_monto_seriedad = 0;
                              let auxi = await this.eatDetLcRepository
                                    .query(`SELECT DESC_TRANSFERENTE 
                   FROM SERA.CAT_TRANSFERENTE CT
                  WHERE CT.NO_TRANSFERENTE = ${DAT.no_transferente}
                    limit 1;`);
                              desc_trasn = auxi[0]?.desc_transferente;

                              if (auxi.length == 0) {
                                    desc_trasn = null;
                              }

                              if (_pdirec == 'M' || _pdirec == 'A') {
                                    let num = await this.eatGoodByLotRepository
                                          .query(` SELECT SUM(VALOR_BASE) 
                 FROM SERA.COMER_BIENESXLOTE 
                WHERE ID_LOTE = ${DAT.id_lote};`);
                                    tmp_lvb = num[0]?.sum;
                              } else {
                                    let num = await this.eatGoodByLotRepository
                                          .query(`SELECT SUM(MONTO_APP_IVA + MONTO_NOAPP_IVA + IVA_BASE) 
                FROM SERA.COMER_BIENESXLOTE CB 
               WHERE CB.ID_LOTE = ${DAT.id_lote};`);
                                    tmp_lvb = num[0]?.sum;
                              }

                              await this.tmpLotsEatRepository
                                    .query(`INSERT INTO COMER.TMP_LOTES_COMER 
                    (ID_LOTE, ID_ESTATUSVTA, ID_EVENTO, LOTE_PUBLICO, VALOR_BASE, LINEA_CAPTURA, NO_TRANSFERENTE, DIRECCION, DESC_TRANSFERENTE, DESCRIPCION, NO_DELEGACION, PRECIO_GARANTIA)
                 VALUES
                    (${DAT.id_lote}, 'PUB', ${DAT.id_evento}, ${DAT.lote_publico}, ${tmp_lvb}, ${DAT.referenciag}, ${DAT.no_transferente}, '${_pdirec}', '${desc_trasn}', '${DAT.descripcion}', ${TMP_DELEGACION}, ${DAT.precio_garantia});`);

                              if (_pdirec == 'A') {
                                    let auxi1 = await this.eatParametersModRepository
                                          .query(` SELECT CAST(VALOR AS NUMERIC) as sum                   
                     FROM SERA.COMER_PARAMETROSMOD
                    WHERE DIRECCION = 'A'
                      AND PARAMETRO = 'GARANTSERAF';`);
                                    vl_monto_seriedad = auxi1[0]?.sum;

                                    console.log(vl_monto_seriedad);

                                    if (vl_monto_seriedad != undefined) {
                                          await this.eatParametersModRepository
                                                .query(` Insert into SERA.COMER_PARAMETROSXLOTE
                     (ID_EVENTO, ID_LOTE, LOTE_PUBLICO, GARANTIAESPECIAL)
                   Values
                     (${DAT.id_evento}, ${DAT.id_lote}, ${DAT.lote_publico}, ${vl_monto_seriedad});`);
                                    }
                              }
                        }
                  }

                  for (const REG of b_eve) {
                        vclasif = await this.estateRepository.query(`SELECT NO_CLASIF_BIEN
            FROM SERA.BIENES
           WHERE NO_BIEN = ${REG.no_bien};`);

                        if (_pdirec == 'M' || _pdirec == 'A') {
                              for (const DAT of await this.eatGoodByLotRepository
                                    .query(` SELECT B_VAL, CB_COL  FROM SERA.COMER_BIENESCOL
                       WHERE NO_CLASIF_BIEN = ${vclasif[0]?.no_clasif_bien}
                         AND DIRECCION      = '${_pdirec}'`)) {
                                    if (v_consulta != null) {
                                          v_consulta = v_consulta + ',' + DAT.b_val;
                                    } else {
                                          v_consulta = DAT.b_val;
                                    }

                                    if (inserta != null) {
                                          inserta = inserta + ',' + DAT.cb_col;
                                    } else {
                                          inserta = DAT.cb_col;
                                    }
                              }

                              if (v_consulta != null) {
                                    nidl = await this.eatLotsRepository.query(`SELECT ID_LOTE 
                  FROM SERA.COMER_LOTES
                 WHERE LOTE_PUBLICO = ${REG.lote_publico}
                 AND ID_EVENTO    = ${pEvent} `);

                                    resp = await this.eatGoodByLotRepository
                                          .query(`  SELECT BXL.ID_BIENXLOTE, BXL.ANEXO                 
                  FROM SERA.COMER_BIENESXLOTE BXL
                 WHERE BXL.ID_LOTE = ${nidl[0]?.id_lote}
                   AND NO_BIEN = ${REG.no_bien};`);
                                    nidbl = resp[0]?.id_bienxlote;
                                    tmp_anexo = resp[0]?.anexo;
                                    if (resp.length == 0) {
                                          nidbl = 1;
                                    }
                                    resp = await this.estateRepository
                                          .query(` SELECT NO_SUBTIPO,NO_SSUBTIPO
                              FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
               WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
                 AND NO_BIEN            = ${REG.no_bien};`);

                                    n_stipo = resp[0]?.no_subtipo;
                                    n_sstipo = resp[0]?.no_ssubtipo;

                                    let auxi = await this.estateRepository
                                          .query(` SELECT CAT.DESC_TRANSFERENTE 
              FROM SERA.BIENES B
              JOIN SERA.EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE
              LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
              WHERE B.NO_BIEN = ${REG.no_bien}
              LIMIT 1; `);

                                    desc_trans = auxi[0]?.desc_transferente;

                                    if (auxi.length == 0) {
                                          desc_trans = null;
                                    }

                                    resp = await this.estateRepository.query(`SELECT 
              REPLACE(REPLACE(COALESCE(CA.UBICACION, CB.UBICACION),'''',''),'"','') AS V_UBICACION, 
              CAST(COALESCE(CA.CODIGO_ESTADO, CB.CODIGO_ESTADO) AS TEXT ) AS n_cest             
            FROM 
              SERA.BIENES B
              LEFT JOIN SERA.CAT_ALMACENES CA ON B.NO_ALMACEN = CA.NO_ALMACEN 
              LEFT JOIN SERA.CAT_BOVEDAS CB ON B.NO_BOVEDA = CB.NO_BOVEDA
            WHERE 
              B.NO_BIEN = ${REG.no_bien};`);

                                    v_ubicacion = resp[0]?.v_ubicacion;
                                    n_cest = resp[0]?.n_cest;

                                    if (
                                          resp[0]?.v_ubicacion == undefined &&
                                          resp[0]?.n_cest == undefined
                                    ) {
                                          v_ubicacion = null;
                                          v_cest = null;
                                    }
                                    v_cest = n_cest.toString();

                                    if (_pdirec != 'I') {
                                          v_consulta = `SELECT '${nidbl}' , '${nidl[0]?.id_lote}', COALESCE(substring('${REG.descripcion}',1,250),  
              'BIENES DIVERSOS'), '${n_stipo}',' ${n_sstipo} ','${desc_trans}', 
              '${v_ubicacion}', 'COALESCE(${v_cest},'')',${tmp_anexo} ,NO_BIEN, DESCRIPCION, CANTIDAD, 
              ${REG.valor_base}, UNIDAD,  '${v_consulta}', CURRENT_DATE as F_CREO  
              FROM SERA.BIENES WHERE NO_BIEN = '${REG.no_bien}'`;
                                    }
                              } else {
                                    nidl = await this.eatLotsRepository.query(`SELECT ID_LOTE 
                  FROM SERA.COMER_LOTES
                 WHERE LOTE_PUBLICO = ${REG.lote_publico}
                   AND ID_EVENTO    = ${pEvent}; `);

                                    resp = await this.eatGoodByLotRepository
                                          .query(` SELECT   BXL.ID_BIENXLOTE, ANEXO                 
                  FROM   SERA.COMER_BIENESXLOTE BXL
                 WHERE   BXL.ID_LOTE = ${nidl[0]?.id_lote}
                   AND   NO_BIEN     = ${REG.no_bien}; `);

                                    nidbl = resp[0]?.id_bienxlote;
                                    tmp_anexo = resp[0]?.anexo;

                                    if (resp.length == 0) {
                                          nidbl = 1;
                                    }

                                    resp = await this.estateRepository
                                          .query(`        SELECT NO_SUBTIPO,NO_SSUBTIPO
                
                FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
               WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
                 AND NO_BIEN            = ${REG.no_bien};`);

                                    n_stipo = resp[0]?.no_subtipo;
                                    n_sstipo = resp[0]?.no_ssubtipo;

                                    let auxi3 = await this.estateRepository
                                          .query(`SELECT CAT.DESC_TRANSFERENTE
              FROM SERA.BIENES B
              JOIN SERA.EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE
              LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
              WHERE B.NO_BIEN = ${REG.no_bien}
              LIMIT 1;`);

                                    desc_trans = auxi3[0]?.desc_transferente;

                                    if (auxi3.length == 0) {
                                          desc_trans = null;
                                    }

                                    resp = await this.estateRepository.query(`SELECT 
              REPLACE(REPLACE(COALESCE(CA.UBICACION, CB.UBICACION), '''', ''), '"', ''),
              COALESCE(CAST(CA.CODIGO_ESTADO AS TEXT), CAST(CB.CODIGO_ESTADO AS TEXT))
            FROM SERA.BIENES B
            LEFT JOIN SERA.CAT_ALMACENES CA ON B.NO_ALMACEN = CA.NO_ALMACEN
            LEFT JOIN SERA.CAT_BOVEDAS CB ON B.NO_BOVEDA = CB.NO_BOVEDA
            WHERE B.NO_BIEN = ${REG.no_bien};`);

                                    v_ubicacion = resp[0]?.replace;
                                    n_cest = resp[0]?.coalesce;

                                    if (resp.length == 0) {
                                          v_ubicacion = null;
                                          n_cest = null;
                                    }

                                    v_cest = n_cest.toString();

                                    if (_pdirec != 'I') {
                                          v_consulta = `SELECT 
              ${nidbl}, 
              ${nidl[0]?.id_lote}, 
              COALESCE(substring ('${REG.descripcion}', 1, 250), 'BIENES DIVERSOS') AS DESCRIPCION, 
              ${n_stipo}, 
              ${n_sstipo}, 
              '${desc_trans}', 
              '${v_ubicacion}', 
              COALESCE('${v_cest}', '') AS V_CEST, 
              NO_BIEN, 
              DESCRIPCION, 
              CANTIDAD, 
              ${REG.valor_base}, 
              UNIDAD, 
              DATE_TRUNC('day', CURRENT_TIMESTAMP) AS F_CREO 
            FROM sera.BIENES 
            WHERE NO_BIEN = ${REG.no_bien}`;
                                    }
                              }

                              if (inserta != null) {
                                    if (_pdirec != 'I') {
                                          inserta = `INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN, ANEXO, NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, ${inserta}, FECHA_CREACION)  (${v_consulta})`;
                                    }
                              } else {
                                    if (_pdirec != 'I') {
                                          inserta = `INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN,  ANEXO, NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, FECHA_CREACION) (${v_consulta})`;
                                    }
                              }

                              if (inserta != null) {
                                    await this.eatGoodByLotRepository.query(`${inserta}`);
                                    ir = ir + 1;
                              }

                              v_consulta = null;
                              inserta = null;
                        } else if (_pdirec == 'I') {
                              nidl = await this.eatLotsRepository.query(`SELECT ID_LOTE 
              FROM SERA.COMER_LOTES
             WHERE LOTE_PUBLICO = ${REG.lote_publico}
               AND ID_EVENTO    = ${pEvent}; `);

                              let auxi = await this.eatGoodByLotRepository
                                    .query(` SELECT BXL.ID_BIENXLOTE              
              FROM sera.COMER_BIENESXLOTE BXL
             WHERE BXL.ID_LOTE = ${nidl[0]?.id_lote}
               AND NO_BIEN = ${REG.no_bien}`);

                              nidbl = auxi[0]?.id_bienxlote;

                              if (auxi.length == 0) {
                                    nidbl = 1;
                              }
                              let auxi2 = await this.eatGoodByLotRepository
                                    .query(`SELECT CAMPO3||', '||CAMPO1 UBICACION, CAMPO1 ESTADO_ALMACEN
               FROM SERA.COMER_BIENESXLOTE
              WHERE NO_BIEN = ${REG.no_bien}
                AND ID_LOTE = ${REG.id_lote};`);
                              console.log('auxi2', auxi2);

                              v_ubicacion = auxi2[0]?.ubicacion;
                              n_cest = auxi2[0]?.estado_almacen;

                              if (auxi2.length == 0) {
                                    v_ubicacion = null;
                                    v_cest = null;
                              }

                              let max = await this.eatGoodByLotRepository
                                    .query(`SELECT MAX(NO_ESTADO)     
              FROM sera.CAT_EDOS_X_COOR CEC, SERA.COMER_BIENESXLOTE CB
             WHERE NO_BIEN = ${REG.no_bien}
               AND ID_LOTE = ${REG.id_lote}
               AND CEC.ESTADO = CAMPO2;`);

                              n_cest = max[0]?.max;

                              if (max.length == 0) {
                                    v_ubicacion = null;
                                    v_cest = null;
                              }

                              resp = await this.estateRepository
                                    .query(` SELECT NO_SUBTIPO,NO_SSUBTIPO            
            FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
           WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
             AND NO_BIEN            = ${REG.no_bien};`);

                              n_stipo = resp[0]?.no_subtipo;
                              n_sstipo = resp[0]?.no_ssubtipo;

                              resp = await this.estateRepository
                                    .query(`SELECT CAT.DESC_TRANSFERENTE AS DESC_TRANS
            FROM SERA.BIENES B
            JOIN SERA.EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE
            LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
            WHERE B.NO_BIEN = ${REG.no_bien}
            LIMIT 1;`);
                              desc_trans = resp[0]?.desc_trans;
                              if (resp.length == 0) {
                                    desc_trans = null;
                              }

                              await this.estateRepository
                                    .query(`INSERT INTO COMER.TMP_BIENES_COMER(ID_BIENXLOTE, NO_BIEN, ID_LOTE, VALOR_BASE, CAMPO1, CAMPO2, CAMPO3, CAMPO4, CAMPO5, CAMPO6,
                                      CAMPO7, CAMPO8, CAMPO9, CANTIDAD, OBSERVACIONES, OBSERVACIONES2, DESCRIPCION_LOTE, FECHA_CREACION,
                                      NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, MONTO_APP_IVA, MONTO_NOAPP_IVA, UBICACION, ESTADO_ALMACEN)
                              (SELECT ID_BIENXLOTE, CB.NO_BIEN, ID_LOTE, (MONTO_APP_IVA + MONTO_NOAPP_IVA + IVA_BASE) V_BASE, CAMPO1, CAMPO2, CAMPO3, CAMPO4, CAMPO5, CAMPO6,
                                      CAMPO7, CAMPO8, CAMPO9, CB.CANTIDAD, CB.OBSERVACIONES, OBSERVACIONES_2, DESCRIPCION_LOTE, FECHA_CREACION,
                                      ${n_stipo}, ${n_sstipo}, '${desc_trans}', MONTO_APP_IVA, MONTO_NOAPP_IVA, CAMPO3||', '||CAMPO2, ${n_cest}
                                 FROM SERA.COMER_BIENESXLOTE CB, SERA.BIENES B WHERE CB.NO_BIEN = ${REG.no_bien}
                                  AND CB.NO_BIEN = B.NO_BIEN AND ID_LOTE = ${REG.id_lote});`);
                        }
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: ['Se ejecuto la consulta correctamente!'],
                  };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      //ACT_TMP_COMER revision
      async getActTmpEat({ pDirec, pEvent }: ActTmpEatDTO) {
            try {
                  let PEVENTO: number = pEvent;
                  let PDIREC;
                  PDIREC = pDirec;

                  let V_CONSULTA;
                  let INSERTA;
                  let VCLASIF;

                  let NIDBL;
                  let NIDL;
                  let N_STIPO;
                  let N_SSTIPO;
                  let DESC_TRANS;
                  let IR;
                  let V_UBICACION;
                  let V_CEST;
                  let N_CEST;
                  let EXLOTE;

                  let SIG;
                  let TMP_D;
                  let DESC_TRASN;
                  let TMP_DELEGACION;
                  let TMP_LVB;

                  let B_EVE = await this.eatGoodByLotRepository
                        .query(`SELECT CB.NO_BIEN, CL.LOTE_PUBLICO,CL.DESCRIPCION, CL.ID_LOTE, CB.ID_BIENXLOTE,
             CB.VALOR_BASE
        FROM SERA.COMER_BIENESXLOTE CB, SERA.COMER_LOTES CL
       WHERE CB.ID_LOTE   = CL.ID_LOTE
         AND CL.ID_EVENTO = ${PEVENTO}
         AND NOT EXISTS (SELECT 1 FROM COMER.TMP_BIENES_COMER TB
                          WHERE TB.NO_BIEN = CB.NO_BIEN
                            AND TB.ID_LOTE = CL.ID_LOTE)
       ORDER BY LOTE_PUBLICO;`);
                  console.log('B_EVE', B_EVE);

                  let CL = await this.eatLotsRepository
                        .query(`SELECT ID_LOTE, ID_ESTATUSVTA, ID_EVENTO, LOTE_PUBLICO, VALOR_BASE, REFERENCIAG, NO_TRANSFERENTE,
              DESCRIPCION, PRECIO_GARANTIA
         FROM SERA.COMER_LOTES CL
        WHERE ID_EVENTO = ${PEVENTO}
          AND NOT EXISTS (SELECT 1 FROM COMER.TMP_LOTES_COMER TL
                           WHERE TL.ID_LOTE = CL.ID_LOTE
                             AND ID_EVENTO  = ${PEVENTO})
        ORDER BY LOTE_PUBLICO`);
                  let CL_E = await this.eatLotsRepository
                        .query(`SELECT ID_EVENTO,ID_EVENTO,ID_LOTE, ID_ESTATUSVTA, ID_EVENTO, LOTE_PUBLICO, VALOR_BASE, REFERENCIAG, NO_TRANSFERENTE,
       DESCRIPCION, PRECIO_GARANTIA
  FROM SERA.COMER_LOTES CL
 WHERE ID_EVENTO = ${PEVENTO}
   AND EXISTS (SELECT 1 FROM COMER.TMP_LOTES_COMER TL
                WHERE TL.ID_LOTE = CL.ID_LOTE
                  AND ID_ESTATUSVTA != 'CAN'                         
                  AND ( CL.LOTE_PUBLICO    != TL.LOTE_PUBLICO OR
                        CL.VALOR_BASE      != TL.VALOR_BASE   OR
                        CL.DESCRIPCION     != TL.DESCRIPCION  OR
                        CL.PRECIO_GARANTIA != TL.PRECIO_GARANTIA
                       )                   
                  AND ID_EVENTO      = ${PEVENTO})
 ORDER BY LOTE_PUBLICO ASC `);

                  let C_LCAN = await this.tmpLotsEatRepository
                        .query(`SELECT ID_LOTE, LOTE_PUBLICO FROM COMER.TMP_LOTES_COMER TL
         WHERE ID_EVENTO = ${PEVENTO}
           AND 0         = (SELECT COUNT(0) FROM SERA.COMER_BIENESXLOTE CB
                             WHERE CB.ID_LOTE = TL.ID_LOTE) ;`);

                  let CE = await this.eatEventRepository
                        .query(`SELECT ID_EVENTO, CVE_PROCESO, FECHA_CIERRE_EVENTO, ID_TPEVENTO, DIRECCION, LUGAR, 'PUB' ID_ESTATUSVTA, FEC_EVENTO
          FROM SERA.COMER_EVENTOS
         WHERE ID_EVENTO = ${PEVENTO}; `);

                  for (const CAN of C_LCAN) {
                        await this.tmpLotsEatRepository
                              .query(`UPDATE COMER.TMP_LOTES_COMER SET ID_ESTATUSVTA = 'CAN', ACT_LOTE = ''
            WHERE ID_EVENTO    = ${PEVENTO}
              AND LOTE_PUBLICO = ${CAN.lote_publico};`);
                  }

                  for (const ACT of CL_E) {
                        await this.tmpLotsEatRepository
                              .query(`DELETE FROM COMER.TMP_BIENES_COMER TB
             WHERE ID_LOTE = ${ACT.id_lote}
               AND NOT EXISTS(SELECT 1 FROM SERA.COMER_BIENESXLOTE CB
                               WHERE CB.NO_BIEN = TB.NO_BIEN
                                 AND CB.ID_LOTE = TB.ID_LOTE);`);

                        let auxi = await this.eatLotsRepository.query(`SELECT DESC_TRANSFERENTE 
                  FROM SERA.CAT_TRANSFERENTE CT
                 WHERE CT.NO_TRANSFERENTE = ${ACT.no_transferente}
                   LIMIT 1;`);
                        DESC_TRASN = auxi[0]?.desc_transferente;
                        if (auxi.length == 0) {
                              DESC_TRASN = null;
                        }
                        let auxi3 = await this.eatLotsRepository.query(
                              `SELECT sera.obt_delegacion_comer(${ACT.id_lote}); `,
                        );
                        TMP_DELEGACION = auxi3[0]?.obt_delegacion_comer;
                        if (PDIREC == 'M' || PDIREC == 'A') {
                              let auxi = await this.eatGoodByLotRepository
                                    .query(`SELECT SUM(VALOR_BASE) as sum
                FROM SERA.COMER_BIENESXLOTE
               WHERE ID_LOTE = ${ACT.id_lote};`);
                              TMP_LVB = auxi[0]?.sum;
                        } else if (PDIREC == 'I') {
                              let auxi = await this.eatGoodByLotRepository
                                    .query(`SELECT SUM(MONTO_APP_IVA + MONTO_NOAPP_IVA + IVA_BASE) as sum
                FROM SERA.COMER_BIENESXLOTE
               WHERE ID_LOTE = ${ACT.id_lote};`);
                              TMP_LVB = auxi[0]?.sum;
                        }
                        await this.tmpLotsEatRepository.query(`UPDATE COMER.TMP_LOTES_COMER TL
              SET VALOR_BASE         = ${TMP_LVB},
                  LINEA_CAPTURA      = '${ACT.referenciag}',
                  NO_TRANSFERENTE    = ${ACT.no_transferente},
                  DESC_TRANSFERENTE  = '${DESC_TRASN}',
                  DESCRIPCION        = '${ACT.descripcion}',
                  NO_DELEGACION      = ${TMP_DELEGACION},
                  ID_ESTATUSVTA      = 'ACT',
                  PRECIO_GARANTIA    = ${ACT.precio_garantia}
           WHERE  ID_LOTE   = ${ACT.id_lote}
             AND  ACT_LOTE  = 'S'
             AND  ID_EVENTO = ${PEVENTO};`);
                        await this.tmpLotsEatRepository.query(`UPDATE COMER.TMP_LOTES_COMER
              SET ACT_LOTE = ''
            WHERE ID_EVENTO = ${PEVENTO}
              AND ID_LOTE = ${ACT.id_lote};`);
                  }

                  for (const DAT of CL) {
                        let auxi = await this.tmpLotsEatRepository.query(`SELECT 1 as num
                FROM COMER.TMP_LOTES_COMER
               WHERE ID_LOTE   = ${DAT.lote_publico}
                 AND ID_EVENTO = ${DAT.id_evento};`);

                        EXLOTE = auxi[0]?.num;
                        SIG = 'S';
                        if (auxi.length == 0) {
                              SIG = 'S';
                        }
                        if (SIG == 'S') {
                              let auxi = await this.eatClientByEventRepository
                                    .query(` SELECT DESC_TRANSFERENTE 
                      FROM sera.CAT_TRANSFERENTE CT
                     WHERE CT.NO_TRANSFERENTE = ${DAT.no_transferente}
                       LIMIT 1;`);
                              DESC_TRASN = auxi[0]?.desc_transferente;

                              if (auxi.length == 0) {
                                    DESC_TRASN = null;
                              }

                              let auxi1 = await this.eatLotsRepository.query(
                                    `SELECT sera.obt_delegacion_comer(${DAT.id_lote}); `,
                              );
                              TMP_DELEGACION = auxi1[0]?.obt_delegacion_comer;

                              if (PDIREC == 'M' || PDIREC == 'A') {
                                    let auxi = await this.eatGoodByLotRepository
                                          .query(` SELECT SUM(VALOR_BASE) as sum
                    FROM SERA.COMER_BIENESXLOTE 
                   WHERE ID_LOTE = ${DAT.id_lote};`);
                                    TMP_LVB = auxi[0]?.sum;
                              } else {
                                    let auxi = await this.eatGoodByLotRepository
                                          .query(`SELECT SUM(MONTO_APP_IVA + MONTO_NOAPP_IVA + IVA_BASE) INTO ${TMP_LVB} 
                   FROM SERA.COMER_BIENESXLOTE CB 
                  WHERE CB.ID_LOTE = ${DAT.id_lote};`);
                                    TMP_LVB = auxi[0]?.sum;
                              }
                              await this.tmpLotsEatRepository
                                    .query(`INSERT INTO COMER.TMP_LOTES_COMER
                       (ID_LOTE, ID_ESTATUSVTA, ID_EVENTO, LOTE_PUBLICO, VALOR_BASE, LINEA_CAPTURA, NO_TRANSFERENTE, DIRECCION, DESC_TRANSFERENTE, DESCRIPCION, NO_DELEGACION, PRECIO_GARANTIA)
                    VALUES
                       (${DAT.id_lote}, 'PUB', ${DAT.id_evento}, ${DAT.lote_publico}, ${TMP_LVB}, '${DAT.referenciag}', ${DAT.no_transferente}, '${PDIREC}', '${DESC_TRASN}', '${DAT.descripcion}', ${TMP_DELEGACION}, ${DAT.precio_garantia});`);
                        }
                  }

                  for (const REG of B_EVE) {
                        let auxi = await this.estateRepository.query(`SELECT NO_CLASIF_BIEN 
                    FROM SERA.BIENES
                   WHERE NO_BIEN = ${REG.no_bien};`);
                        VCLASIF = auxi[0]?.no_clasif_bien;

                        if (PDIREC == 'M' || PDIREC == 'A') {
                              for (const DAT of await this.eatGoodByLotRepository
                                    .query(`SELECT B_VAL, CB_COL  FROM SERA.COMER_BIENESCOL
                               WHERE NO_CLASIF_BIEN = ${VCLASIF}
                                 AND DIRECCION      = '${PDIREC}'`)) {
                                    if (V_CONSULTA != null) {
                                          V_CONSULTA = V_CONSULTA + ',' + DAT.b_val;
                                    } else {
                                          V_CONSULTA = DAT.b_val;
                                    }
                                    if (INSERTA != null) {
                                          INSERTA = INSERTA + ',' + DAT.cb_col;
                                    } else {
                                          INSERTA = DAT.cb_col;
                                    }
                              }

                              if (V_CONSULTA != null) {
                                    let auxi = await this.eatLotsRepository.query(`SELECT ID_LOTE 
                          FROM SERA.COMER_LOTES
                         WHERE LOTE_PUBLICO = ${REG.lote_publico}
                           AND ID_EVENTO    = ${PEVENTO};`);

                                    NIDL = auxi[0]?.id_lote;

                                    let auxi2 = await this.eatGoodByLotRepository
                                          .query(`SELECT BXL.ID_BIENXLOTE                           
                          FROM SERA.COMER_BIENESXLOTE BXL
                         WHERE BXL.ID_LOTE = ${NIDL}
                           AND NO_BIEN = ${REG.no_bien};`);
                                    NIDBL = auxi2[0]?.id_bienxlote;

                                    if (auxi2.length == 0) {
                                          NIDBL = 1;
                                    }

                                    let auxi1 = await this.eatClientByEventRepository
                                          .query(`SELECT NO_SUBTIPO,NO_SSUBTIPO                    
                        FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
                       WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
                         AND NO_BIEN            = ${REG.no_bien};`);

                                    N_STIPO = auxi1[0]?.no_subtipo;
                                    N_SSTIPO = auxi1[0]?.no_ssubtipo;

                                    let auxi3 = await this.eatClientByEventRepository
                                          .query(`SELECT CAT.DESC_TRANSFERENTE 
              FROM SERA.BIENES B 
              INNER JOIN SERA.EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE
              LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
              WHERE B.NO_BIEN = ${REG.no_bien}
              LIMIT 1;
              `);

                                    DESC_TRANS = auxi3[0]?.desc_transferente;

                                    if (auxi3.length == 0) {
                                          DESC_TRANS = null;
                                    }

                                    let auxi4 = await this.estateRepository
                                          .query(`SELECT REPLACE(REPLACE(COALESCE(CA.UBICACION, CB.UBICACION),'''',''),'"',''),
              CAST(COALESCE(CA.CODIGO_ESTADO, CB.CODIGO_ESTADO) AS text)
       FROM SERA.BIENES B
       LEFT JOIN SERA.CAT_ALMACENES CA ON B.NO_ALMACEN = CA.NO_ALMACEN
       LEFT JOIN SERA.CAT_BOVEDAS CB ON B.NO_BOVEDA = CB.NO_BOVEDA
       WHERE B.NO_BIEN = ${REG.no_bien};`);

                                    V_UBICACION = auxi4[0]?.replace;
                                    N_CEST = auxi4[0]?.coalesce;

                                    if (auxi4.length == 0) {
                                          V_UBICACION = null;
                                          V_CEST = null;
                                    }

                                    V_CEST = N_CEST;

                                    if (PDIREC != 'I') {
                                          //${V_CONSULTA} := TO_CHAR('SELECT '||${NIDBL}||', '||${NIDL}||', '''||COALESCE(SUBSTR(REG.DESCRIPCION,1,250), 'BIENES DIVERSOS')||''', '|| ${N_STIPO}||', '||${N_SSTIPO}||', '''||DESC_TRANS||''', '''||${V_UBICACION}||''', '''||COALESCE(${V_CEST},'''')||''', NO_BIEN, DESCRIPCION, CANTIDAD, '||REG.VALOR_BASE||', UNIDAD,  '||${V_CONSULTA}||', TRUNC(SYSDATE) F_CREO  FROM BIENES WHERE NO_BIEN = '||REG.NO_BIEN);
                                          V_CONSULTA = `SELECT ${NIDBL}, ${NIDL}, COALESCE(SUBSTR('${REG.descripcion}',1,250) , 'BIENES DIVERSOS' , ${N_STIPO}, ${N_SSTIPO}, '${DESC_TRANS}', '${V_UBICACION}', 'COALESCE(''::text, ${V_CEST})', NO_BIEN, DESCRIPCION, CANTIDAD, ${REG.valor_base}, UNIDAD,  ${V_CONSULTA}, DATE_TRUNC('day', CURRENT_DATE) F_CREO  FROM SERA.BIENES WHERE NO_BIEN = ${REG.no_bien}`;
                                    }
                              } else {
                                    let auxi = await this.eatLotsRepository.query(`SELECT ID_LOTE 
                          FROM SERA.COMER_LOTES
                         WHERE LOTE_PUBLICO = ${REG.lote_publico}
                           AND ID_EVENTO    = ${PEVENTO};`);

                                    NIDL = auxi[0]?.id_lote;

                                    console.log('NIDL', NIDL);

                                    let auxi1 = await this.eatGoodByLotRepository
                                          .query(`SELECT   BXL.ID_BIENXLOTE  
                          FROM   SERA.COMER_BIENESXLOTE BXL
                         WHERE   BXL.ID_LOTE = ${NIDL}
                           AND   NO_BIEN     = ${REG.no_bien};`);
                                    NIDBL = auxi1[0]?.id_bienxlote;

                                    if (auxi1.length == 0) {
                                          NIDBL = 1;
                                    }
                                    let auxi3 = await this.eatClientByEventRepository
                                          .query(`SELECT NO_SUBTIPO,NO_SSUBTIPO                        
                        FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
                       WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
                         AND NO_BIEN            = ${REG.no_bien};`);

                                    N_STIPO = auxi3[0]?.no_subtipo;
                                    N_SSTIPO = auxi3[0]?.no_ssubtipo;

                                    let auxi4 = await this.estateRepository
                                          .query(`SELECT CAT.DESC_TRANSFERENTE 
              FROM SERA.BIENES B 
              JOIN SERA.EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE 
              LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
              WHERE B.NO_BIEN = ${REG.no_bien} 
              LIMIT 1;`);
                                    DESC_TRANS = auxi4[0]?.desc_transferente;

                                    if (auxi4 == 0) {
                                          DESC_TRANS = null;
                                    }

                                    let auxi5 = await this.estateRepository
                                          .query(`SELECT REPLACE(REPLACE(COALESCE(CA.UBICACION,CB.UBICACION),'''',''),'"',''), 
              COALESCE(CAST(CA.CODIGO_ESTADO AS TEXT), CAST(CB.CODIGO_ESTADO AS TEXT))
       FROM SERA.BIENES B 
       LEFT JOIN SERA.CAT_ALMACENES CA ON B.NO_ALMACEN = CA.NO_ALMACEN 
       LEFT JOIN SERA.CAT_BOVEDAS CB ON B.NO_BOVEDA = CB.NO_BOVEDA
       WHERE B.NO_BIEN = ${REG.no_bien};`);
                                    //verificar
                                    V_UBICACION = auxi5[0]?.replace;
                                    N_CEST = auxi5[0].coalesce;

                                    if (auxi5.length == 0) {
                                          V_UBICACION = null;
                                          V_CEST = null;
                                    }

                                    V_CEST = N_CEST;

                                    if (PDIREC != 'I') {
                                          // ${V_CONSULTA} := TO_CHAR('SELECT '||${NIDBL}||', '||${NIDL}||', '''||COALESCE(SUBSTR(REG.DESCRIPCION,1,250), 'BIENES DIVERSOS')||''', '|| ${N_STIPO}||', '||${N_SSTIPO}||', '''||DESC_TRANS||''', '''||${V_UBICACION}||''', '''||COALESCE(${V_CEST},'''')||''',NO_BIEN, DESCRIPCION, CANTIDAD, '||REG.VALOR_BASE||', UNIDAD, TRUNC(SYSDATE) F_CREO  FROM BIENES WHERE NO_BIEN = '||REG.NO_BIEN);
                                          V_CONSULTA = `SELECT ${NIDBL} , ${NIDL}, 'COALESCE(SUBSTRING('${REG.descripcion}',1,250)', 'BIENES DIVERSOS', ${N_STIPO}, ${N_SSTIPO}, '${DESC_TRANS}', '${V_UBICACION}', 'COALESCE('${V_CEST}', '')',NO_BIEN, DESCRIPCION, CANTIDAD, ${REG.valor_base}, UNIDAD, DATE_TRUNC('day', CURRENT_DATE)  FROM SERA.BIENES WHERE NO_BIEN = ${REG.no_bien}`;
                                    }
                              }

                              if (INSERTA != null) {
                                    if (PDIREC != 'I') {
                                          //${INSERTA} := TO_CHAR( ' INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN, NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, '||${INSERTA}||', FECHA_CREACION)  ('||${V_CONSULTA}||')');
                                          INSERTA = `INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN, NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, ${INSERTA}, FECHA_CREACION)  (${V_CONSULTA})`;
                                    }
                              } else {
                                    if (PDIREC != 'I') {
                                          //${INSERTA} := TO_CHAR(' INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN,  NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, FECHA_CREACION)'||' ('||${V_CONSULTA}||')');
                                          INSERTA = `INSERT INTO COMER.TMP_BIENES_COMER (ID_BIENXLOTE,   ID_LOTE,   DESCRIPCION_LOTE, NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN,  NO_BIEN,    CAMPO1,    CANTIDAD, VALOR_BASE, UNIDAD, FECHA_CREACION) (${V_CONSULTA})`;
                                    }
                              }

                              if (INSERTA != null) {
                                    //EXECUTE IMMEDIATE ${INSERTA};
                                    await this.eatLotsRepository.query(`${INSERTA}`);
                                    IR = IR + 1;
                              }

                              V_CONSULTA = null;
                              INSERTA = null;
                        } else if (PDIREC == 'I') {
                              let auxi = await this.eatLotsRepository.query(`SELECT ID_LOTE 
                      FROM SERA.COMER_LOTES
                     WHERE LOTE_PUBLICO = ${REG.lote_publico}
                       AND ID_EVENTO    = ${PEVENTO};`);

                              NIDL = auxi[0]?.id_lote;
                              let auxi1 = await this.eatGoodByLotRepository
                                    .query(`SELECT BXL.ID_BIENXLOTE                     
                      FROM SERA.COMER_BIENESXLOTE BXL
                     WHERE BXL.ID_LOTE = ${NIDL}
                       AND NO_BIEN = ${REG.no_bien};`);

                              NIDBL = auxi1[0]?.id_bienxlote;

                              if (auxi1.length == 0) {
                                    NIDBL = 1;
                              }

                              let auxi2 = await this.eatLcRepository
                                    .query(`SELECT NO_SUBTIPO,NO_SSUBTIPO                  
                    FROM SERA.CAT_SSSUBTIPO_BIEN CAT, SERA.BIENES B
                   WHERE CAT.NO_CLASIF_BIEN = B.NO_CLASIF_BIEN
                     AND NO_BIEN            = ${REG.no_bien};`);
                              N_STIPO = auxi2[0]?.no_subtipo;
                              N_SSTIPO = auxi2[0]?.no_ssubtipo;

                              let auxi3 = await this.estateRepository
                                    .query(`SELECT CAT.DESC_TRANSFERENTE 
            FROM BIENES B 
            INNER JOIN EXPEDIENTES E ON B.NO_EXPEDIENTE = E.NO_EXPEDIENTE
            LEFT JOIN SERA.CAT_TRANSFERENTE CAT ON CAT.NO_TRANSFERENTE = E.NO_TRANSFERENTE
            WHERE B.NO_BIEN = ${REG.no_bien}
            LIMIT 1;`);
                              DESC_TRANS = auxi3[0]?.desc_transferente;

                              if (auxi3.length == 0) {
                                    DESC_TRANS = null;
                              }

                              let auxi4 = await this.eatLotsRepository
                                    .query(`SELECT MAX(NO_ESTADO) as max
                      FROM SERA.CAT_EDOS_X_COOR CEC, SERA.COMER_BIENESXLOTE CB
                    WHERE NO_BIEN = ${REG.no_bien}
                      AND ID_LOTE = ${REG.id_lote}
                      AND CEC.ESTADO = CAMPO2;`);

                              N_CEST = auxi4[0]?.max;

                              if (auxi4.length == 0) {
                                    V_UBICACION = null;
                                    V_CEST = null;
                              }

                              await this.eatLotsRepository
                                    .query(`INSERT INTO COMER.TMP_BIENES_COMER(ID_BIENXLOTE, NO_BIEN, ID_LOTE, VALOR_BASE, CAMPO1, CAMPO2, CAMPO3, CAMPO4, CAMPO5, CAMPO6,
                                              CAMPO7, CAMPO8, CAMPO9, CANTIDAD, OBSERVACIONES, OBSERVACIONES2, DESCRIPCION_LOTE, FECHA_CREACION,
                                              NO_SUBTIPO, NO_SSUBTIPO, DESC_TRANSFERENTE, UBICACION, ESTADO_ALMACEN)
                                      (SELECT ID_BIENXLOTE, CB.NO_BIEN, ID_LOTE, (MONTO_APP_IVA + MONTO_NOAPP_IVA + IVA_BASE) V_BASE, CAMPO1, CAMPO2, CAMPO3, CAMPO4, CAMPO5, CAMPO6,
                                              CAMPO7, CAMPO8, CAMPO9, CB.CANTIDAD, CB.OBSERVACIONES, OBSERVACIONES_2, DESCRIPCION_LOTE, FECHA_CREACION,
                                              ${N_STIPO}, ${N_SSTIPO}, ${DESC_TRANS}, CAMPO3||', '||CAMPO2, ${N_CEST}
                                         FROM SERA.COMER_BIENESXLOTE CB, SERA.BIENES B WHERE CB.NO_BIEN = ${REG.no_bien}
                                          AND CB.NO_BIEN = B.NO_BIEN AND ID_LOTE = ${REG.id_lote});`);
                        }
                  }

                  for (const EVE of CE) {
                        await this.tmpLotsEatRepository.query(`UPDATE TMP_EVENTOS_COMER
              SET ID_EVENTO      = ${EVE.id_evento},
                  CVE_PROCESO    = ${EVE.cve_proceso},
                  FEC_FALLO      = ${EVE.fecha_cierre_evento},
                  LUGAR          = ${EVE.lugar},
                  ID_ESTATUSVTA  = ${EVE.id_estatusvta},
                  FECHA_EVENTO   = ${EVE.fec_evento}
            WHERE ID_EVENTO = ${PEVENTO};`);
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: ['Se ejecuto la consulta correctamente!'],
                  };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      //"SERA"."PA_COMER_FALLO"// duda de la duplicacion de datos
      async getPaEatFail({ pdirec, pevent }: PaEatFailDTO) {
            try {
                  let PEVENTO: Number = pevent;
                  let PDIREC: string = pdirec;

                  let n_CONT;
                  let n_CONT1;
                  let n_ID_LOTE;
                  let n_PRECIO_FINAL;
                  let n_PRECIO_SIN_IVA;
                  let n_SPRECIO_FINAL;
                  let n_SPRECIO_SIN_IVA;
                  let n_SMONTO_APP_IVA;
                  let n_SMONTO_NOAPP_IVA;
                  let n_IVA_FINAL;
                  let n_MONTO_APP_IVA;
                  let n_MONTO_NOAPP_IVA;
                  let n_LIM_INF;
                  let n_LIM_SUP;
                  let n_COMP_IMP_IVA;
                  let n_ID_TPEVENTO;
                  let v_CONIVA;
                  let c_RESUL;
                  let n_IVA;
                  let n_PORC_APP_IVA;
                  let n_PORC_NOAPP_IVA;
                  let V_APP_IVA;
                  let v_n_IVATEM;

                  let auxi = await this.eatParametersModRepository
                        .query(`SELECT CAST(VALOR AS NUMERIC) as number    
     FROM SERA.COMER_PARAMETROSMOD PAR
    WHERE PAR.PARAMETRO = 'IVA'
      AND PAR.DIRECCION = 'C';`);
                  n_IVA = auxi[0]?.number;

                  await this.eatLotsRepository.query(
                        `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},0,null,'direccion ${PDIREC} entra a pa_comer_fallo');`,
                  );

                  let auxi1 = await this.eatEventRepository
                        .createQueryBuilder()
                        .select('APLICA_IVA')
                        .where(`ID_EVENTO=${PEVENTO}`)
                        .getRawOne();

                  V_APP_IVA = auxi1?.aplica_iva;

                  if (PDIREC == 'I') {
                        if (V_APP_IVA != 1) {
                              n_IVA = 0;
                        }
                        //PK_PROCS_INMUEBLES.P_ASIGNA_IMPORTES (PEVENTO,null,
                        //                                  c_RESUL);

                        n_ID_LOTE = -1;
                        for (const DAT of await this.eatLotsRepository
                              .query(`SELECT CB.NO_BIEN, CB.ID_LOTE, 
      CL.PRECIO_FINAL,
      CL.MONTO_APP_IVA * CL.PRECIO_FINAL / CL.VALOR_BASE LMONTO_APP_IVA,
      CL.MONTO_NOAPP_IVA * CL.PRECIO_FINAL / CL.VALOR_BASE LMONTO_NOAPP_IVA,
      CL.IVA_LOTE,
      ROUND(CB.PCTSLOTE * CL.PRECIO_FINAL,2) PFINAL,
      CB.VALOR_BASE,
      ROUND(CB.PCTSLOTE * (CL.IVA_LOTE * CL.PRECIO_FINAL / CL.VALOR_BASE),2) IVA_BASE,
      ROUND(CB.PCTSLOTE * (CL.MONTO_APP_IVA * CL.PRECIO_FINAL / CL.VALOR_BASE),2) MONTO_APP_IVA,
      ROUND(CB.PCTSLOTE * (CL.MONTO_NOAPP_IVA * CL.PRECIO_FINAL / CL.VALOR_BASE),2) MONTO_NOAPP_IVA
 FROM SERA.COMER_LOTES CL, SERA.COMER_BIENESXLOTE CB
WHERE CL.ID_LOTE            = CB.ID_LOTE                     
  AND CL.ID_ESTATUSVTA = 'VEN'
  AND CL.ID_EVENTO          = ${PEVENTO}
ORDER BY CL.ID_LOTE, CB.PCTSLOTE`)) {
                              if (DAT.ID_LOTE != n_ID_LOTE) {
                                    n_ID_LOTE = DAT.ID_LOTE;

                                    if (V_APP_IVA != 1) {
                                          n_IVA = 0;
                                    }
                                    let auxi = await this.eatGoodByLotRepository
                                          .query(` SELECT COUNT(0)    
              FROM COMER_BIENESXLOTE CB
             WHERE ID_LOTE  = ${DAT.id_lote};`);
                                    n_CONT = auxi[0]?.count;

                                    n_CONT1 = 0;
                                    n_SPRECIO_FINAL = 0;
                                    n_SMONTO_APP_IVA = 0;
                                    n_SMONTO_NOAPP_IVA = 0;
                              }
                              n_CONT1 = n_CONT1 + 1;

                              if ((n_CONT = n_CONT1)) {
                                    n_PRECIO_FINAL = DAT.precio_final - n_SPRECIO_FINAL;

                                    n_MONTO_NOAPP_IVA = DAT.lmonto_noapp_iva - n_SMONTO_NOAPP_IVA;
                                    n_COMP_IMP_IVA = n_PRECIO_FINAL - n_MONTO_NOAPP_IVA;
                                    n_MONTO_APP_IVA =
                                          Math.round((n_COMP_IMP_IVA / (1 + n_IVA / 100)) * 100) / 100;

                                    n_IVA_FINAL = n_COMP_IMP_IVA - n_MONTO_APP_IVA;
                              } else {
                                    n_MONTO_NOAPP_IVA = DAT.monto_noapp_iva;
                                    n_IVA_FINAL =
                                          Math.round(DAT.monto_app_iva * (n_IVA / 100) * 100) / 100;
                                    n_LIM_INF =
                                          Math.trunc(
                                                (DAT.monto_app_iva - Math.pow(10, -2) / 2) *
                                                (n_IVA / 100) *
                                                100,
                                          ) / 100;
                                    n_LIM_SUP =
                                          Math.round(
                                                (DAT.monto_app_iva + Math.pow(10, -2) / 2 - Math.pow(10, -12)) *
                                                (n_IVA / 100) *
                                                100,
                                          ) / 100;

                                    if (!(n_IVA_FINAL >= n_LIM_INF && n_IVA_FINAL <= n_LIM_SUP)) {
                                          if (n_IVA_FINAL < n_LIM_INF) {
                                                n_IVA_FINAL = n_LIM_INF;
                                          } else if (n_IVA_FINAL > n_LIM_SUP) {
                                                n_IVA_FINAL = n_LIM_SUP;
                                          }
                                          n_MONTO_APP_IVA =
                                                Math.round((n_IVA_FINAL / (n_IVA / 100)) * 100) / 100;
                                    } else {
                                          n_MONTO_APP_IVA = DAT.monto_app_iva;
                                    }
                                    n_PRECIO_FINAL = n_MONTO_APP_IVA + n_MONTO_NOAPP_IVA + n_IVA_FINAL;
                              }
                              n_SPRECIO_FINAL = n_SPRECIO_FINAL + n_PRECIO_FINAL;
                              n_SMONTO_APP_IVA = n_SMONTO_APP_IVA + n_MONTO_APP_IVA;
                              n_SMONTO_NOAPP_IVA = n_SMONTO_NOAPP_IVA + n_MONTO_NOAPP_IVA;

                              await this.eatGoodByLotRepository.query(`UPDATE COMER_BIENESXLOTE
            SET PRECIO_FINAL    = n_PRECIO_FINAL,
                PRECIO_SIN_IVA  = n_PRECIO_FINAL-n_IVA_FINAL,
                IVA_FINAL       = n_IVA_FINAL,
                MONTO_APP_IVA   = n_MONTO_APP_IVA,
                MONTO_NOAPP_IVA = n_MONTO_NOAPP_IVA
          WHERE NO_BIEN = ${DAT.no_bien}
            AND ID_LOTE = ${DAT.id_lote};`);
                        }

                        await this.eatLotsRepository.query(`UPDATE SERA.COMER_LOTES LOT
         SET (MONTO_APP_IVA,
              MONTO_NOAPP_IVA,
              MONTO_SIN_IVA,
              IVA_LOTE) =
             (SELECT SUM(COALESCE(MONTO_APP_IVA,0)),
                     SUM(COALESCE(MONTO_NOAPP_IVA,0)),
                     SUM(COALESCE(PRECIO_SIN_IVA,0)),
                     SUM(COALESCE(IVA_FINAL,0)) 
                FROM SERA.COMER_BIENESXLOTE BXL
               WHERE BXL.ID_LOTE    = LOT.ID_LOTE)
       WHERE LOT.ID_EVENTO          = ${PEVENTO}
         AND LOT.ID_ESTATUSVTA = 'VEN';`);
                  } else {
                        await this.eatLotsRepository.query(
                              `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},0,null,'direccion ${PDIREC} es muebles');`,
                        );

                        let auxi = await this.eatEventRepository
                              .createQueryBuilder()
                              .select('ID_TPEVENTO')
                              .where(`ID_EVENTO = ${PEVENTO};`)
                              .getRawOne();

                        n_ID_TPEVENTO = auxi?.id_tpevento;

                        if (auxi.length == 0) {
                              n_ID_TPEVENTO = 0;
                        }
                        await this.eatLotsRepository.query(
                              `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},null,null,'es muebles 2');`,
                        );
                        n_ID_LOTE = -1;

                        for (const DAT of await this.eatLotsRepository
                              .query(`SELECT NO_BIEN, CB.ID_LOTE,
      CL.PRECIO_FINAL,
      CL.IVA_LOTE,
      ROUND(CB.PCTSLOTE  * CL.PRECIO_FINAL,2) PFINAL,      
      VALOR,
      CB.A_IVA
 FROM SERA.COMER_LOTES CL, SERA.COMER_BIENESXLOTE CB, SERA.COMER_PARAMETROSMOD CP
WHERE CL.ID_LOTE            = CB.ID_LOTE
  AND CP.PARAMETRO          = 'IVA'
 AND CL.ID_ESTATUSVTA = 'VEN' 
  AND CL.ID_EVENTO          = ${PEVENTO}
ORDER BY CL.ID_LOTE, CB.PCTSLOTE`)) {
                              if (DAT.id_lote != n_ID_LOTE) {
                                    n_ID_LOTE = DAT.ID_LOTE;
                                    let auxi = await this.eatGoodByLotRepository
                                          .createQueryBuilder()
                                          .select('COUNT(0)')
                                          .where(`ID_LOTE  = ${DAT.id_lote};`)
                                          .getRawOne();
                                    n_CONT = auxi?.count;
                                    n_CONT1 = 0;
                                    n_SPRECIO_FINAL = 0;
                                    n_SPRECIO_SIN_IVA = 0;
                              }
                              if (DAT.a_iva == 'NO') {
                                    v_n_IVATEM = 0;
                              } else {
                                    v_n_IVATEM = n_IVA;
                              }

                              await this.eatLcRepository.query(
                                    ` insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'v_n_IVATEM:${v_n_IVATEM}');`,
                              );
                              n_CONT1 = n_CONT1 + 1;

                              if (n_CONT == n_CONT1) {
                                    n_PRECIO_FINAL = DAT.precio_final - n_SPRECIO_FINAL;
                                    n_PRECIO_SIN_IVA =
                                          Math.round((n_PRECIO_FINAL / (1 + v_n_IVATEM / 100)) * 100) / 100;
                                    n_IVA_FINAL = n_PRECIO_FINAL - n_PRECIO_SIN_IVA;

                                    await this.eatLotsRepository.query(
                                          `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'A');`,
                                    );
                              } else {
                                    n_PRECIO_FINAL = DAT.pfinal;
                                    n_PRECIO_SIN_IVA =
                                          Math.round((n_PRECIO_FINAL / (1 + v_n_IVATEM / 100)) * 100) / 100;

                                    n_IVA_FINAL = n_PRECIO_FINAL - n_PRECIO_SIN_IVA;
                                    n_LIM_INF =
                                          Math.trunc(
                                                (n_PRECIO_SIN_IVA - Math.pow(10, -2) / 2) *
                                                (v_n_IVATEM / 100) *
                                                100,
                                          ) / 100;
                                    n_LIM_SUP =
                                          Math.round(
                                                (n_PRECIO_SIN_IVA + Math.pow(10, -2) / 2 - Math.pow(10, -12)) *
                                                (v_n_IVATEM / 100) *
                                                100,
                                          ) / 100;

                                    await this.eatEventRepository.query(
                                          `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'B');`,
                                    );

                                    if (!(n_IVA_FINAL >= n_LIM_INF && n_IVA_FINAL <= n_LIM_SUP)) {
                                          if (n_IVA_FINAL < n_LIM_INF) {
                                                n_IVA_FINAL = n_LIM_INF;
                                          } else if (n_IVA_FINAL > n_LIM_SUP) {
                                                n_IVA_FINAL = n_LIM_SUP;
                                          }
                                          n_PRECIO_SIN_IVA =
                                                Math.round((n_IVA_FINAL / (v_n_IVATEM / 100)) * 100) / 100;
                                          n_PRECIO_FINAL = n_PRECIO_SIN_IVA + n_IVA_FINAL;
                                    }
                              }
                              n_SPRECIO_FINAL = n_SPRECIO_FINAL + n_PRECIO_FINAL;
                              n_SPRECIO_SIN_IVA = n_SPRECIO_SIN_IVA + n_PRECIO_SIN_IVA;

                              if (n_ID_TPEVENTO == 5) {
                                    let auxi = await this.eatParametersModRepository
                                          .createQueryBuilder()
                                          .select('UPPER(VALOR)')
                                          .where(`PARAMETRO = 'CHCONIVA';`)
                                          .getRawOne();
                                    v_CONIVA = auxi?.upper;

                                    if (v_CONIVA == 'N') {
                                          n_MONTO_NOAPP_IVA = n_PRECIO_FINAL;
                                          n_PRECIO_SIN_IVA = n_PRECIO_FINAL;
                                          n_IVA_FINAL = 0;
                                    } else {
                                          n_MONTO_NOAPP_IVA = 0;
                                    }
                              } else if (
                                    n_ID_TPEVENTO == 13 &&
                                    (DAT.iva_lote == 0 || DAT.IVA_LOTE == null)
                              ) {
                                    n_MONTO_NOAPP_IVA = n_PRECIO_FINAL;
                                    n_PRECIO_SIN_IVA = n_PRECIO_FINAL;
                                    n_IVA_FINAL = 0;
                              } else if (n_ID_TPEVENTO == 4 && v_n_IVATEM == 0) {
                                    n_MONTO_NOAPP_IVA = n_PRECIO_FINAL;

                                    console.log('PEVENTO', PEVENTO);
                                    await this.eatLotsRepository.query(
                                          `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'C');`,
                                    );
                              } else {
                                    await this.eatLotsRepository.query(
                                          `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'D');`,
                                    );

                                    if (v_n_IVATEM == 0) {
                                          n_MONTO_NOAPP_IVA = n_PRECIO_FINAL;

                                          await this.eatLotsRepository.query(
                                                `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'E');`,
                                          );
                                    } else {
                                          n_MONTO_NOAPP_IVA = 0;

                                          await this.eatLotsRepository.query(
                                                `insert into sera.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'F');`,
                                          );
                                    }
                              }

                              await this.eatGoodByLotRepository
                                    .createQueryBuilder()
                                    .update(EatGoodByLotEntity)
                                    .set({
                                          finalPrice: n_PRECIO_FINAL,
                                          priceWithoutIva: n_PRECIO_SIN_IVA,
                                          finalIva: n_IVA_FINAL,
                                          amountWithoutVat: n_MONTO_NOAPP_IVA,
                                    })
                                    .where(`MONTO_NOAPP_IVA = ${n_MONTO_NOAPP_IVA}`)
                                    .andWhere(`ID_LOTE = ${DAT.id_lote}`)
                                    .execute();

                              await this.eatLotsRepository.query(
                                    `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'n_PRECIO_FINAL: ${n_PRECIO_FINAL}');`,
                              );
                              await this.eatLotsRepository.query(
                                    `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'n_PRECIO_SIN_IVA: ${n_PRECIO_SIN_IVA}');`,
                              );
                              await this.eatLotsRepository.query(
                                    `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'n_IVA_FINAL:  ${n_IVA_FINAL}');`,
                              );

                              await this.eatLotsRepository.query(
                                    `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'n_MONTO_NOAPP_IVA: ${n_MONTO_NOAPP_IVA}'); `,
                              );

                              await this.eatLotsRepository.query(
                                    `insert into SERA.comer_inconsistencias (id_evento,no_bien,lote_publico,desc_error)values(${PEVENTO},${DAT.no_bien},null,'DESPUES DE UPDATE COMERBIENESXLOTE');`,
                              );
                        }

                        await this.eatLotsRepository.query(`UPDATE SERA.COMER_LOTES LOT
      SET (MONTO_NOAPP_IVA,
           MONTO_SIN_IVA,
           IVA_LOTE,
           PORC_APP_IVA,
           PORC_NOAPP_IVA) =
          (SELECT SUM(COALESCE(MONTO_NOAPP_IVA,0)),
                  SUM(COALESCE(PRECIO_SIN_IVA,0)),
                  SUM(COALESCE(IVA_FINAL,0)),
                  CASE WHEN SUM(COALESCE(IVA_FINAL,0)) = 0 THEN 0 ELSE 1 END,
                  CASE WHEN SUM(COALESCE(IVA_FINAL,0)) = 0 THEN 1 ELSE 0 END
           FROM sera.comer_bienesxlote  BXL
           WHERE BXL.ID_LOTE = LOT.ID_LOTE)
      WHERE LOT.ID_EVENTO = ${PEVENTO}
      AND LOT.ID_ESTATUSVTA = 'VEN';`);
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: ['Se ejecuto la consulta correctamente!'],
                  };
            } catch (error) {
                  return {
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: [error.message],
                  };
            }
      }

      async fiRelTypesLc(pi_TIPO_LC_VAL: string) {
            let re_PARAMS;
            let n_NUM_DIAS = null;
            let c_TIPO_LC = null;
            let c_TABLA_APLICA = null;
            let c_IND_FEC = null;
            let c_IND_MONTO = null;
            let c_TIPO_LC_VAL;
            let c_PARAMETROF;
            let c_QUERY;
            let c_ERRORF;
            let c_REL_TIPO_LC;

            c_QUERY =
                  'SELECT PARAMETRO FROM SERA.COMER_PARAMETROSMOD WHERE PARAMETRO IN (';
            c_TIPO_LC_VAL = pi_TIPO_LC_VAL;
            if (c_TIPO_LC_VAL == 'GARA') {
                  c_QUERY = c_QUERY + `'GCE','GCN','GSE'` + ')';
            } else if (c_TIPO_LC_VAL == 'LIQ') {
                  c_QUERY = c_QUERY + `'LIQE','LIQN'` + ')';
            } else {
                  return 'ERR';
            }

            for (const re_PARAMS of c_QUERY) {
                  c_PARAMETROF = re_PARAMS;
                  let result = await lastValueFrom(
                        this.clineteProxyCaptureline.send(
                              { cmd: 'pObtDatlc' },
                              {
                                    p_PARAMETRO: c_PARAMETROF,
                                    p_ID_TPEVENTO: 1,
                                    p_DIRECCION: 'M',
                                    p_IND_MOV: 'C',
                                    p_NUM_DIAS: n_NUM_DIAS,
                                    p_TIPO_LC: c_TIPO_LC,
                                    p_TABLA_APLICA: c_TABLA_APLICA,
                                    p_IND_FEC: c_IND_FEC,
                                    p_IND_MONTO: c_IND_MONTO,
                              },
                        ),
                  );

                  c_ERRORF = result?.message;
                  /*PK_COMER_LC.P_OBT_DATLC (c_PARAMETROF,
                                            1,
                                            'M',
                                            'C',
                                            n_NUM_DIAS,
                                            c_TIPO_LC,
                                            c_TABLA_APLICA,
                                            c_IND_FEC,
                                            c_IND_MONTO,
                                            c_ERRORF);*/

                  if (c_ERRORF[0] == 'ok') {
                        if (c_REL_TIPO_LC == null) {
                              c_REL_TIPO_LC = c_TIPO_LC;
                        } else {
                              c_REL_TIPO_LC = c_REL_TIPO_LC + ',' + c_TIPO_LC;
                        }
                  }
            }

            if (c_REL_TIPO_LC) {
                  return c_REL_TIPO_LC;
            } else {
                  return 'ERR';
            }
      }

      //"SERA"."PA_GARANTXLOTE"
      async getPaGarantByLot() {
            let p_ID_EVENTO = 11285;
            let p_IND_LIMPIA;
            let p_TIPO_EVENTO = 'M5';
            let p_ID_CLIENTE;
            let p_ID_LOTE;
            let n_ID_EVENTO;
            let n_ID_TPEVENTO;
            let c_DIRECCION;
            let n_MONTO_TOT_LOT;
            let n_MONTO_DIF_LIQ;
            let n_MONTO_TOTPAG;
            let n_PRECIO_GARANTIA;
            let n_MONTO_LIQ;
            let n_GARANTIA_ASIG;
            let n_PORGARCUMSE;
            let c_ID_ESTATUSVTA;
            let n_ID_LOTE;
            let n_LOTE_PUBLICO;
            let c_ERROR;
            let c_IND_LIMPIA;
            let c_TIPO_EVENTO;
            let c_TABLA1;
            let c_TABLA2;
            let c_QUERY1;
            let c_QUERY2;
            let c_QUERY3;
            let c_SENTENCIA;
            let nc_ID_CLIENTE;
            let nc_MONTO_TOTPAG;
            let re_MONTOS_GARANTIAS;
            let nc_ID_LOTE;
            let nc_PRECIO_FINAL;
            let nc_PRECIO_GARANTIA;
            let cc_ID_ESTATUSVTA;
            let nc_LOTE_PUBLICO;
            let re_MONTOS_LOTES;
            let c_PARAMETRO;
            let c_LLAVE;
            let n_VALIDA;
            let c_VALOR;
            let n_CVE_EJEC;
            let e_EXCEPPROC;
            let n_CONTL;
            let n_CONTV;
            let n_ID_TIPO_DISP;
            let nc_ID_LOTE_MG;
            let c_TIPOS_LC_GARA;
            let c_TIPOS_LC_LIQ;
            let n_MONTO_LC_GARA;
            let n_MONTO_LC_LIQ;
            let n_MONTO_LC_CALC;
            let n_MONTO_LC_EXGA;
            let np_ID_CLIENTE: number = 4610;
            let np_ID_LOTE;

            n_ID_EVENTO = p_ID_EVENTO;
            c_IND_LIMPIA = p_IND_LIMPIA;
            c_TIPO_EVENTO = p_TIPO_EVENTO;
            np_ID_CLIENTE = p_ID_CLIENTE;
            np_ID_LOTE = p_ID_LOTE;

            let auxi = await this.eatEventRepository.query(`SELECT CE.ID_TPEVENTO , 
    CE.DIRECCION,
    CASE 
      WHEN CE.DIRECCION = 'I' THEN COALESCE(MOD(CT.ID_TIPO_DISP, 10), 1)
      ELSE COALESCE(TRUNC(CT.ID_TIPO_DISP / 10), 1)
    END
FROM SERA.COMER_EVENTOS CE
JOIN SERA.COMER_TPEVENTOS CT
 ON CE.ID_TPEVENTO = CT.ID_TPEVENTO
WHERE ID_EVENTO = ${n_ID_EVENTO}`);

            n_ID_TPEVENTO = auxi[0]?.id_tpevento;
            c_DIRECCION = auxi[0]?.direccion;
            n_ID_TIPO_DISP = auxi[0]?.coalesce;

            if (np_ID_CLIENTE == null && np_ID_LOTE == null) {
                  let auxi = await this.eatLotsRepository.query(` SELECT COUNT(*),
      COALESCE(SUM(CASE 
                     WHEN ID_ESTATUSVTA IN ('VEN', 'PREP') THEN 1
                     ELSE 0
                   END), 0)
 FROM SERA.COMER_LOTES
WHERE ID_EVENTO = ${n_ID_EVENTO}
  AND ID_CLIENTE IS NOT NULL;`);

                  n_CONTL = auxi[0]?.count;
                  n_CONTV = auxi[0]?.coalesce;
            } else {
                  if (np_ID_CLIENTE != null) {
                        let auxi1 = await this.eatLotsRepository.query(`SELECT COUNT(*),
        COALESCE(SUM(CASE ID_ESTATUSVTA WHEN 'VEN' THEN 1 WHEN 'PREP' THEN 1 ELSE 0 END), 0)
 FROM COMER_LOTES
 WHERE ID_EVENTO = ${n_ID_EVENTO}
   AND ID_CLIENTE = ${np_ID_CLIENTE};
 ;`);
                        n_CONTL = auxi1[0]?.count;
                        n_CONTV = auxi1[0]?.coalesce;
                  } else {
                        let auxi2 = await this.eatLotsRepository.query(`SELECT COUNT(0), 
                 COALESCE(SUM(CASE WHEN ID_ESTATUSVTA = 'VEN' THEN 1 
                  WHEN ID_ESTATUSVTA = 'PREP' THEN 1 
                  ELSE 0 
             END), 0)
            FROM SERA.COMER_LOTES
           WHERE ID_EVENTO = ${n_ID_EVENTO}
             AND ID_LOTE = ${np_ID_LOTE};`);
                        n_CONTL = auxi2[0]?.count;
                        n_CONTV = auxi2[0]?.coalesce;
                  }
            }

            if (n_CONTL > 0 && n_CONTL != n_CONTV) {
                  c_ERROR =
                        'El Evento ya tiene al menos un proceso de dispersión definitivo.';
                  return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: [`${c_ERROR}`],
                  };
            }
            c_TIPOS_LC_GARA = await this.fiRelTypesLc('GARA');

            if (!c_TIPOS_LC_GARA || c_TIPOS_LC_GARA == 'ERR') {
                  c_ERROR = 'Error en la obtención de Tipos de LCs de garantías.';
                  return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: [`${c_ERROR}`],
                  };
            }

            c_TIPOS_LC_LIQ = await this.fiRelTypesLc('LIQ');

            if (!c_TIPOS_LC_LIQ || c_TIPOS_LC_LIQ == 'ERR') {
                  c_ERROR = 'Error en la obtención de Tipos de LCs de liquidación.';
                  return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: [`${c_ERROR}`],
                  };
            }

            c_PARAMETRO = 'PORGARASIG';

            let auxi1 = await this.eatParametersModRepository
                  .query(`SELECT VALOR         
         FROM SERA.COMER_PARAMETROSMOD
        WHERE PARAMETRO = '${c_PARAMETRO}';`);

            c_VALOR = auxi1[0]?.valor;

            c_LLAVE = c_DIRECCION + n_ID_TPEVENTO.toString().trim();

            n_VALIDA = c_VALOR.indexOf(c_LLAVE);

            if (n_VALIDA == 0) {
                  n_PORGARCUMSE = 0;
            } else {
                  c_VALOR = c_VALOR.substring(
                        c_VALOR.indexOf(c_LLAVE),
                        c_VALOR.indexOf('|', c_VALOR.indexOf(c_LLAVE)) -
                        c_VALOR.indexOf(c_LLAVE),
                  );
                  n_PORGARCUMSE = parseInt(c_VALOR.split(',')[1]);
            }
            if (!n_PORGARCUMSE) {
                  n_PORGARCUMSE = 0;
            }

            c_TABLA1 = null;
            c_TABLA2 = null;

            if (c_TIPO_EVENTO == 'M1') {
                  c_TABLA1 = 'SERA.TMP_LC_COMER';
                  c_TABLA2 = 'COMER.TMP_LOTES_COMER';
            } else if (c_TIPO_EVENTO == 'M2' || c_TIPO_EVENTO == 'M5') {
                  c_TABLA1 = 'SERA.TMP_LC_COMER';
                  c_TABLA2 = 'SERA.COMER_LOTES';
            }
            if (c_TABLA1 == null) {
                  return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: [
                              `-20010, Tipo de evento inválido para el proceso de Garantias,1,400`,
                        ],
                  };
            }

            if (c_TIPO_EVENTO == 'M5') {
                  c_QUERY1 = `SELECT DISTINCT ID_CLIENTE, 0 ID_LOTE, 0 MONTO_TOTPAG FROM ${c_TABLA2} CR WHERE ID_EVENTO = '${n_ID_EVENTO}'`;
                  if (np_ID_CLIENTE != null) {
                        c_QUERY1 = c_QUERY1 + ` AND ID_CLIENTE = ${np_ID_CLIENTE}`;
                  } else {
                        c_QUERY1 = c_QUERY1 + ` AND ID_CLIENTE IS NOT NULL ORDER BY ID_CLIENTE`;
                  }
            } else {
                  console.log('n_ID_TIPO_DISP', n_ID_TIPO_DISP);
                  if (n_ID_TIPO_DISP == 1) {
                        c_QUERY1 =
                              ' FROM SERA.COMER_REF_GARANTIAS CR ' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'  ` +
                              ` AND ((ESTATUS IN ('GEN','PAG','VAL')` +
                              ' AND EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE))' +
                              ` OR (ESTATUS IN ('PAG','VAL')` +
                              ' AND NOT EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE)' +
                              ` AND SUBSTR(REF_GSAE,1,1) = '1')) `;
                        c_QUERY3 = c_QUERY1;
                        c_QUERY1 =
                              ' SELECT ID_CLIENTE, 0 ID_LOTE,' +
                              ' SUM(MONTO) MONTO_TOTPAG ' +
                              c_QUERY1;
                        c_QUERY3 =
                              ' UPDATE SERA.COMER_LOTES' +
                              ` SET ID_ESTATUSVTA = 'PREP'` +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ' AND ID_CLIENTE IN (' +
                              ' SELECT ID_CLIENTE FROM SERA.COMER_LOTES' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ` AND ID_ESTATUSVTA = 'VEN'` +
                              ' AND NOT EXISTS' +
                              ' ( SELECT ID_CLIENTE ' +
                              c_QUERY3 +
                              '))';

                        if (np_ID_CLIENTE != null) {
                              c_QUERY1 =
                                    c_QUERY1 +
                                    ` AND ID_CLIENTE = '${np_ID_CLIENTE}' ` +
                                    ' GROUP BY ID_CLIENTE';
                              c_QUERY3 = c_QUERY3 + ` AND ID_CLIENTE = '${np_ID_CLIENTE}'`;
                        } else {
                              c_QUERY1 = c_QUERY1 + ' GROUP BY ID_CLIENTE' + ' ORDER BY ID_CLIENTE';
                        }
                  } else if (n_ID_TIPO_DISP == 3) {
                        c_QUERY1 =
                              ' FROM SERA.COMER_REF_GARANTIAS CR' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ` AND ((ESTATUS IN ('GEN','PAG','VAL')` +
                              ' AND EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE))' +
                              ` OR (ESTATUS IN ('PAG','VAL')` +
                              ' AND NOT EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE)' +
                              ` AND SUBSTR(REF_GSAE,1,1) = '1'))`;
                        c_QUERY1 =
                              'SELECT ID_CLIENTE, 0 ID_LOTE,' +
                              ' SUM(MONTO) MONTO_TOTPAG' +
                              c_QUERY1 +
                              ' GROUP BY ID_CLIENTE' +
                              ' UNION ALL' +
                              ' SELECT DISTINCT ID_CLIENTE, 0 ID_LOTE, 0 MONTO_TOTPAG' +
                              ' FROM SERA.COMER_LOTES' +
                              ` WHERE ID_EVENTO = ${n_ID_EVENTO}` +
                              ' AND ID_CLIENTE IN (' +
                              ' SELECT ID_CLIENTE FROM SERA.COMER_LOTES' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ` AND ID_ESTATUSVTA = 'VEN'` +
                              ' AND EXISTS (' +
                              ' SELECT ID_CLIENTE' +
                              c_QUERY1 +
                              '))';
                        if (np_ID_CLIENTE != null) {
                              c_QUERY1 = c_QUERY1 + ` AND ID_CLIENTE = '${np_ID_CLIENTE}'`;
                        } else {
                              c_QUERY1 = c_QUERY1 + ` ORDER BY ID_CLIENTE`;
                        }
                  } else {
                        c_QUERY1 =
                              ' FROM SERA.COMER_REF_GARANTIAS CR' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ` AND ((ESTATUS IN ('GEN','PAG','VAL')` +
                              ' AND EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE))' +
                              ` OR (ESTATUS IN ('PAG','VAL')` +
                              ' AND NOT EXISTS (SELECT 1' +
                              ' FROM ' +
                              c_TABLA1 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO' +
                              ' AND ID_LOTE = CR.ID_LOTE' +
                              ' AND NO_CHEQUE = CR.NO_CHEQUE' +
                              ' AND BANCO_EXP_CHEQUE = CR.BANCO_EXP_CHEQUE)' +
                              ` AND SUBSTR(REF_GSAE,1,1) = '1'))` +
                              ' AND (ID_CLIENTE, ID_LOTE) IN (SELECT ID_CLIENTE, ID_LOTE FROM ' +
                              c_TABLA2 +
                              ' WHERE ID_EVENTO = CR.ID_EVENTO)';

                        c_QUERY3 = c_QUERY1;
                        c_QUERY1 =
                              'SELECT ID_CLIENTE, ID_LOTE,' + ' SUM(MONTO) MONTO_TOTPAG' + c_QUERY1;
                        c_QUERY3 =
                              'UPDATE SERA.COMER_LOTES' +
                              ` SET ID_ESTATUSVTA = 'PREP'` +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ' AND (ID_CLIENTE, ID_LOTE) IN (' +
                              ' SELECT ID_CLIENTE, ID_LOTE FROM SERA.COMER_LOTES' +
                              ` WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                              ` AND ID_ESTATUSVTA = 'VEN'` +
                              ' MINUS' +
                              ' SELECT ID_CLIENTE, ID_LOTE' +
                              c_QUERY3 +
                              ')';
                        if (np_ID_LOTE != null) {
                              c_QUERY1 =
                                    c_QUERY1 +
                                    ` AND ID_LOTE = '${np_ID_LOTE}'` +
                                    ' GROUP BY ID_CLIENTE, ID_LOTE';
                              c_QUERY3 = c_QUERY3 + ` AND ID_LOTE = '${np_ID_LOTE}'`;
                        } else {
                              c_QUERY1 =
                                    c_QUERY1 +
                                    ' GROUP BY ID_CLIENTE, ID_LOTE' +
                                    ' ORDER BY ID_CLIENTE, ID_LOTE';
                        }

                        if (c_IND_LIMPIA == 'S') {
                              if (c_TIPO_EVENTO == 'M5') {
                                    /*
                             PA_LIMPIA_EVEN(n_ID_EVENTO,
                                             'M2',
                                             np_ID_CLIENTE,
                                             np_ID_LOTE,
                                             c_ERROR);
                                           }*/
                              } else {
                                    /*PA_LIMPIA_EVEN (n_ID_EVENTO,
                                             c_TIPO_EVENTO,
                                             np_ID_CLIENTE,
                                             np_ID_LOTE,
                                             c_ERROR);*/
                              }

                              if (c_ERROR != 'OK') {
                                    // p_RESUL = C_ERROR;
                                    // RAISE_APPLICATION_ERROR(-20010,SUBSTR('D: '||C_ERROR,1,400));
                              }

                              if (np_ID_CLIENTE == null && np_ID_LOTE == null) {
                                    c_SENTENCIA = `UPDATE ${c_TABLA2} SET ID_ESTATUSVTA = 'VEN' WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_CLIENTE IS NOT NULL AND ID_ESTATUSVTA = 'PREP'`;
                              } else {
                                    if (np_ID_CLIENTE != null) {
                                          c_SENTENCIA = `UPDATE ${c_TABLA2} SET ID_ESTATUSVTA = 'VEN' WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_CLIENTE = '${np_ID_CLIENTE}' AND ID_ESTATUSVTA = 'PREP'`;
                                    } else {
                                          c_SENTENCIA = `UPDATE ${c_TABLA2} SET ID_ESTATUSVTA = 'VEN' WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_LOTE = '${np_ID_LOTE}' AND ID_ESTATUSVTA = 'PREP'`;
                                    }
                              }

                              //await this.eatLotsRepository.query(`${c_SENTENCIA}`)
                        }

                        for (const re_MONTOS_GARANTIAS of await this.eatLotsRepository.query(
                              `${c_QUERY1}`,
                        )) {
                              nc_ID_CLIENTE = re_MONTOS_GARANTIAS.id_cliente;
                              nc_ID_LOTE_MG = re_MONTOS_GARANTIAS.id_lote;
                              nc_MONTO_TOTPAG = re_MONTOS_GARANTIAS.monto_totpag;
                              n_MONTO_TOTPAG = nc_MONTO_TOTPAG;
                              if (c_TIPO_EVENTO == 'M5') {
                                    c_SENTENCIA = `SELECT SUM(PRECIO_FINAL) FROM ${c_TABLA2} WHERE ID_EVENTO = ${n_ID_EVENTO} AND ID_CLIENTE = ${nc_ID_CLIENTE} AND ID_ESTATUSVTA = 'VEN'`;
                              } else {
                                    if (n_ID_TIPO_DISP == 1 || n_ID_TIPO_DISP == 3) {
                                          let consulta = await this.eatClientByEventRepository.query(
                                                ` SELECT ID_LOTE, ID_EVENTO FROM ${c_TABLA2} ` +
                                                `WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                                                `AND ID_CLIENTE = '${nc_ID_CLIENTE}'` +
                                                ` AND ID_ESTATUSVTA = 'VEN'`,
                                          );

                                          let idLot = consulta[0]?.id_lote;
                                          let idEvent = consulta[0]?.id_evento;

                                          let resp = await lastValueFrom(
                                                this.clineteProxyCaptureline.send(
                                                      { cmd: 'fncObtenGaranespecial' },
                                                      {
                                                            idLotIn: Number(idLot),
                                                            idEventIn: Number(idEvent),
                                                      },
                                                ),
                                          );

                                          let FNC_OBTEN_GARANESPECIAL = resp?.data.GARANESP;

                                          c_SENTENCIA =
                                                `SELECT SUM (CASE WHEN ${FNC_OBTEN_GARANESPECIAL}  > 0 THEN ${FNC_OBTEN_GARANESPECIAL} ELSE CASE WHEN PRECIO_FINAL < PRECIO_GARANTIA THEN PRECIO_FINAL ELSE PRECIO_GARANTIA END END) FROM ` +
                                                c_TABLA2 +
                                                `WHERE ID_EVENTO = '${n_ID_EVENTO}'` +
                                                `AND ID_CLIENTE = '${nc_ID_CLIENTE}'` +
                                                ` AND ID_ESTATUSVTA = 'VEN'`;
                                    } else {
                                          let consulta = await this.eatClientByEventRepository.query(
                                                ` SELECT ID_LOTE, ID_EVENTO FROM ${c_TABLA2} ` +
                                                `WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_LOTE = '${nc_ID_LOTE_MG}' AND ID_CLIENTE = '${nc_ID_CLIENTE}' AND ID_ESTATUSVTA = 'VEN'`,
                                          );

                                          let idLot = consulta[0]?.id_lote;
                                          let idEvent = consulta[0]?.id_evento;

                                          let resp = await lastValueFrom(
                                                this.clineteProxyCaptureline.send(
                                                      { cmd: 'fncObtenGaranespecial' },
                                                      {
                                                            idLotIn: Number(idLot),
                                                            idEventIn: Number(idEvent),
                                                      },
                                                ),
                                          );

                                          let FNC_OBTEN_GARANESPECIAL = resp?.data.GARANESP;
                                          c_SENTENCIA = `SELECT CASE WHEN ${FNC_OBTEN_GARANESPECIAL} > 0 THEN ${FNC_OBTEN_GARANESPECIAL} ELSE CASE WHEN PRECIO_FINAL < PRECIO_GARANTIA THEN PRECIO_FINAL ELSE PRECIO_GARANTIA END END FROM ${c_TABLA2} WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_LOTE = '${nc_ID_LOTE_MG}' AND ID_CLIENTE = '${nc_ID_CLIENTE}' AND ID_ESTATUSVTA = 'VEN';`;
                                    }
                              }

                              let resp = await this.eatLotsRepository.query(`${c_SENTENCIA}`);

                              // n_MONTO_TOT_LOT = resp[0]?.sum;

                              if (n_MONTO_TOT_LOT > 0) {
                                    n_MONTO_DIF_LIQ = n_MONTO_TOTPAG - n_MONTO_TOT_LOT;
                                    if (n_MONTO_DIF_LIQ < 0) {
                                          n_MONTO_DIF_LIQ = 0;
                                    }
                                    n_MONTO_TOTPAG = n_MONTO_TOTPAG - n_MONTO_DIF_LIQ;
                                    n_ID_LOTE = null;
                                    n_LOTE_PUBLICO = 999999;

                                    if (
                                          c_TIPO_EVENTO == 'M5' ||
                                          n_ID_TIPO_DISP == 1 ||
                                          n_ID_TIPO_DISP == 3
                                    ) {
                                          let consulta = await this.eatClientByEventRepository.query(
                                                ` SELECT ID_LOTE, ID_EVENTO FROM ${c_TABLA2} ` +
                                                `WHERE ID_EVENTO = '${n_ID_EVENTO}'
              AND ID_CLIENTE = '${nc_ID_CLIENTE}'
             ORDER BY PRECIO_FINAL DESC`,
                                          );

                                          let idLot = consulta[0]?.id_lote;
                                          let idEvent = consulta[0]?.id_evento;

                                          let resp = await lastValueFrom(
                                                this.clineteProxyCaptureline.send(
                                                      { cmd: 'fncObtenGaranespecial' },
                                                      {
                                                            idLotIn: Number(idLot),
                                                            idEventIn: Number(idEvent),
                                                      },
                                                ),
                                          );

                                          let FNC_OBTEN_GARANESPECIAL = resp?.data.GARANESP;

                                          c_QUERY2 = `SELECT ID_LOTE, PRECIO_FINAL,
                   CASE WHEN ${FNC_OBTEN_GARANESPECIAL} > 0 THEN ${FNC_OBTEN_GARANESPECIAL} ELSE CASE WHEN PRECIO_FINAL < PRECIO_GARANTIA THEN PRECIO_FINAL ELSE PRECIO_GARANTIA END END AS PRECIO_GARANTIA,
      ID_ESTATUSVTA,
      LOTE_PUBLICO
FROM ${c_TABLA2}
WHERE ID_EVENTO = '${n_ID_EVENTO}'
 AND ID_CLIENTE = '${nc_ID_CLIENTE}'
ORDER BY PRECIO_FINAL DESC`;
                                    } else {
                                          let auxi = await this.eatLotsRepository
                                                .query(`SELECT ID_LOTE, ID_EVENTO  FROM ${c_TABLA2}
                    WHERE ID_EVENTO = '${n_ID_EVENTO}'
                    AND ID_LOTE = '${nc_ID_LOTE_MG}'
                    AND ID_CLIENTE = '${nc_ID_CLIENTE}'`);

                                          let idLot = auxi[0]?.id_lote;
                                          let idEvent = auxi[0]?.id_evento;

                                          let resp = await lastValueFrom(
                                                this.clineteProxyCaptureline.send(
                                                      { cmd: 'fncObtenGaranespecial' },
                                                      {
                                                            idLotIn: Number(idLot),
                                                            idEventIn: Number(idEvent),
                                                      },
                                                ),
                                          );

                                          let valorObtenido = resp?.data.GARANESP;

                                          c_QUERY2 = `SELECT ID_LOTE,
                    PRECIO_FINAL,
                    CASE WHEN ${valorObtenido} > 0 THEN ${valorObtenido} ELSE CASE WHEN PRECIO_FINAL < PRECIO_GARANTIA THEN PRECIO_FINAL ELSE PRECIO_GARANTIA END END PRECIO_GARANTIA,
                    ID_ESTATUSVTA,
                    LOTE_PUBLICO
                    FROM ${c_TABLA2}
                    WHERE ID_EVENTO = '${n_ID_EVENTO}'
                    AND ID_LOTE = '${nc_ID_LOTE_MG}'
                    AND ID_CLIENTE = '${nc_ID_CLIENTE}'`;

                                          for (const re_MONTOS_LOTES of await this.eatLotsRepository.query(
                                                `${c_QUERY2}`,
                                          )) {
                                                nc_ID_LOTE = re_MONTOS_LOTES.id_lote;
                                                nc_PRECIO_FINAL = re_MONTOS_LOTES.precio_final;
                                                nc_PRECIO_GARANTIA = re_MONTOS_LOTES.precio_garantia;
                                                cc_ID_ESTATUSVTA = re_MONTOS_LOTES.id_estatusvta;
                                                nc_LOTE_PUBLICO = re_MONTOS_LOTES.lote_publico;

                                                if (cc_ID_ESTATUSVTA != 'VEN') {
                                                      await this.eatClientByEventRepository.query(
                                                            `UPDATE SERA.COMER_LOTES
             SET ID_ESTATUSVTA   = ${cc_ID_ESTATUSVTA},
                 PRECIO_FINAL    = ${nc_PRECIO_FINAL},
                 ANTICIPO        = 0, 
                 MONTO_LIQ       = ${nc_PRECIO_FINAL},
                 PRECIO_GARANTIA = ${nc_PRECIO_GARANTIA},
                 ID_CLIENTE      = ${nc_ID_CLIENTE}
           WHERE ID_LOTE         = ${nc_ID_LOTE};`,
                                                      );
                                                } else {
                                                      if (c_TIPO_EVENTO == 'M5') {
                                                            await this.eatLotsRepository
                                                                  .createQueryBuilder()
                                                                  .update(EatLotsEntity)
                                                                  .set({
                                                                        idStatusVta: 'VEN',
                                                                        finalPrice: nc_PRECIO_FINAL,
                                                                        advance: 0,
                                                                        priceGuarantee: nc_PRECIO_FINAL,
                                                                        amountLiq: nc_PRECIO_FINAL,
                                                                        idClient: nc_ID_CLIENTE,
                                                                        assignedGuarantee: 0,
                                                                  })
                                                                  .where('ID_LOTE = :ID_LOTE', { ID_LOTE: nc_ID_LOTE })
                                                                  .execute();

                                                            let newHora = new Date().toLocaleDateString('es-ES');

                                                            //verificar
                                                            await lastValueFrom(
                                                                  this.clineteProxyCaptureline.send(
                                                                        { cmd: 'spGenLc' },
                                                                        {
                                                                              P_ID_LOTE: nc_ID_LOTE,
                                                                              P_ID_CLIENTE: nc_ID_CLIENTE,
                                                                              P_PARAMETRO: 'LIQN',
                                                                              P_MONTO: nc_PRECIO_FINAL,
                                                                              P_IND_MOV: 'C',
                                                                              P_FECVIGENCIA: `${newHora}`,
                                                                        },
                                                                  ),
                                                            );
                                                      } else {
                                                            if (n_MONTO_TOTPAG - nc_PRECIO_GARANTIA <= 0) {
                                                                  n_PRECIO_GARANTIA = n_MONTO_TOTPAG;
                                                            } else {
                                                                  n_PRECIO_GARANTIA = nc_PRECIO_GARANTIA;
                                                            }

                                                            n_MONTO_TOTPAG = n_MONTO_TOTPAG - n_PRECIO_GARANTIA;

                                                            if (
                                                                  n_PRECIO_GARANTIA < nc_PRECIO_GARANTIA &&
                                                                  n_ID_TIPO_DISP == 3
                                                            ) {
                                                                  c_ID_ESTATUSVTA = 'PREP';
                                                            } else {
                                                                  c_ID_ESTATUSVTA = 'VEN';
                                                                  if (n_LOTE_PUBLICO > nc_LOTE_PUBLICO) {
                                                                        n_LOTE_PUBLICO = nc_LOTE_PUBLICO;
                                                                        n_ID_LOTE = nc_ID_LOTE;
                                                                  }
                                                            }

                                                            n_MONTO_LIQ = 0;
                                                            if (n_MONTO_DIF_LIQ > 0) {
                                                                  n_MONTO_LIQ = nc_PRECIO_FINAL - n_PRECIO_GARANTIA;
                                                                  if (n_MONTO_DIF_LIQ - n_MONTO_LIQ <= 0) {
                                                                        n_MONTO_LIQ = n_MONTO_DIF_LIQ;
                                                                  }
                                                                  n_MONTO_DIF_LIQ = n_MONTO_DIF_LIQ - n_MONTO_LIQ;
                                                            }

                                                            n_GARANTIA_ASIG = Math.round(
                                                                  nc_PRECIO_FINAL * n_PORGARCUMSE,
                                                            );
                                                            if (n_PRECIO_GARANTIA + n_MONTO_LIQ >= n_GARANTIA_ASIG) {
                                                                  n_GARANTIA_ASIG = 0;
                                                            } else {
                                                                  n_GARANTIA_ASIG =
                                                                        n_GARANTIA_ASIG - (n_PRECIO_GARANTIA + n_MONTO_LIQ);
                                                            }

                                                            c_SENTENCIA = `
                     SELECT COALESCE(SUM(CDL.MONTO), 0)
FROM COMER_DET_LC CDL
WHERE EXISTS (
    SELECT 1 as num
    FROM COMER_LC CL 
    WHERE CL.ID_LC = CDL.ID_LC 
        AND CL.ID_EVENTO = '${n_ID_EVENTO}' 
        AND CL.ID_LOTE = ${nc_ID_LOTE}
        AND CL.ID_CLIENTE = '${nc_ID_CLIENTE}'
) 
AND CDL.ESTATUS IN ('PAG', 'VAL') 
AND CDL.TIPO_REF IN (${c_TIPOS_LC_GARA} ))   
                     `;
                                                            //   let auxi3=await this.eatLcRepository.query(`${c_SENTENCIA}`)
                                                            // n_MONTO_LC_GARA=auxi3[0]?.num

                                                            c_SENTENCIA = `SELECT COALESCE(SUM(CDL.MONTO),0) 
             FROM COMER_DET_LC CDL 
             WHERE EXISTS (
                 SELECT 1 
                 FROM COMER_LC CL 
                 WHERE CL.ID_LC = CDL.ID_LC 
                 AND CL.ID_EVENTO = '${n_ID_EVENTO}' 
                 AND CL.ID_LOTE = '${nc_ID_LOTE}'
                 AND CL.ID_CLIENTE = '${nc_ID_CLIENTE}'
             ) 
             AND CDL.ESTATUS IN ('PAG', 'VAL') 
             AND CDL.TIPO_REF IN (${c_TIPOS_LC_LIQ})`;

                                                            let auxi4 = await this.eatDetLcRepository.query(
                                                                  `${c_SENTENCIA}`,
                                                            );
                                                            n_MONTO_LC_LIQ = auxi4[0]?.coalesce;

                                                            await this.eatLotsRepository
                                                                  .createQueryBuilder()
                                                                  .update(EatLotsEntity)
                                                                  .set({
                                                                        idStatusVta: c_ID_ESTATUSVTA,
                                                                        finalPrice: nc_PRECIO_FINAL,
                                                                        advance: n_PRECIO_GARANTIA + n_MONTO_LIQ,
                                                                        priceGuarantee: n_PRECIO_GARANTIA,
                                                                        amountLiq:
                                                                              nc_PRECIO_FINAL -
                                                                              (n_PRECIO_GARANTIA + n_MONTO_LIQ) -
                                                                              n_GARANTIA_ASIG,
                                                                        idClient: nc_ID_CLIENTE,
                                                                        assignedGuarantee: n_GARANTIA_ASIG,
                                                                  })
                                                                  .where('ID_LOTE = :ID_LOTE', { ID_LOTE: nc_ID_LOTE })
                                                                  .execute();

                                                            if (c_ID_ESTATUSVTA == 'VEN') {
                                                                  if (n_GARANTIA_ASIG > 0) {
                                                                        n_MONTO_LC_CALC = n_GARANTIA_ASIG - n_MONTO_LC_GARA;
                                                                        if (n_MONTO_LC_CALC < 0) {
                                                                              n_MONTO_LC_EXGA = n_MONTO_LC_CALC * -1;
                                                                              n_MONTO_LC_CALC = 0;
                                                                        } else {
                                                                              n_MONTO_LC_EXGA = 0;
                                                                        }

                                                                        if (n_MONTO_LC_CALC > 0) {
                                                                              //revisar
                                                                              await lastValueFrom(
                                                                                    this.clineteProxyCaptureline.send(
                                                                                          { cmd: 'spGenLc' },
                                                                                          {
                                                                                                P_ID_LOTE: nc_ID_LOTE,
                                                                                                P_ID_CLIENTE: nc_ID_CLIENTE,
                                                                                                P_PARAMETRO: 'GCN',
                                                                                                P_MONTO: n_MONTO_LC_CALC,
                                                                                                P_IND_MOV: 'C',
                                                                                                P_FECVIGENCIA: null,
                                                                                          },
                                                                                    ),
                                                                              );
                                                                        }
                                                                  } else {
                                                                        n_MONTO_LC_EXGA = n_MONTO_LC_GARA;
                                                                  }
                                                            }

                                                            if (
                                                                  nc_PRECIO_FINAL -
                                                                  (n_PRECIO_GARANTIA + n_MONTO_LIQ) -
                                                                  n_GARANTIA_ASIG -
                                                                  (n_MONTO_LC_LIQ + n_MONTO_LC_EXGA) >
                                                                  0
                                                            ) {
                                                                  await lastValueFrom(
                                                                        this.clineteProxyCaptureline.send(
                                                                              { cmd: 'spGenLc' },
                                                                              {
                                                                                    P_ID_LOTE: nc_ID_LOTE,
                                                                                    P_ID_CLIENTE: nc_ID_CLIENTE,
                                                                                    P_PARAMETRO: 'LIQN',
                                                                                    P_MONTO:
                                                                                          nc_PRECIO_FINAL -
                                                                                          (n_PRECIO_GARANTIA + n_MONTO_LIQ) -
                                                                                          n_GARANTIA_ASIG -
                                                                                          (n_MONTO_LC_LIQ + n_MONTO_LC_EXGA),
                                                                                    P_IND_MOV: 'C',
                                                                                    P_FECVIGENCIA: null,
                                                                              },
                                                                        ),
                                                                  );
                                                            }
                                                      }
                                                }
                                          }
                                    }

                                    if (
                                          n_ID_LOTE != null &&
                                          (c_TIPO_EVENTO == 'M5' ||
                                                n_ID_TIPO_DISP == 1 ||
                                                n_ID_TIPO_DISP == 3)
                                    ) {
                                          c_SENTENCIA =
                                                `UPDATE SERA.COMER_PAGOREF SET ID_LOTE = '${n_ID_LOTE}', VALIDO_SISTEMA = 'A', RESULTADO = 'Referencia Valida' WHERE REFERENCIA IN (SELECT LTRIM(RTRIM(REF_GSAE)) LTRIM(RTRIM(REF_GBANCO)) FROM SERA.COMER_REF_GARANTIAS CR` +
                                                ` WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_CLIENTE = '${nc_ID_CLIENTE}' AND ESTATUS = 'PAG' AND NOT EXISTS (SELECT 1 FROM ${c_TABLA1} WHERE ID_EVENTO = CR.ID_EVENTO AND ID_LOTE = CR.ID_LOTE) AND SUBSTR(REF_GSAE,1,1) = '1')`;
                                          // await this.eatPagosRefgensRepository.query(`${c_SENTENCIA}`)

                                          c_SENTENCIA = `UPDATE SERA.COMER_REF_GARANTIAS CR SET ID_LOTE = '${n_ID_LOTE}' WHERE ID_EVENTO = '${n_ID_EVENTO}' AND ID_CLIENTE = '${nc_ID_CLIENTE}' AND ESTATUS = 'PAG' AND NOT EXISTS (SELECT 1 FROM ${c_TABLA1} WHERE ID_EVENTO = CR.ID_EVENTO  AND ID_LOTE = CR.ID_LOTE) AND SUBSTR(REF_GSAE,1,1) = '1'`;
                                          // await this.eatRefGarantiesRepository.query(`${c_SENTENCIA}`)
                                    }
                              } else {
                              }
                        }

                        if (c_TIPO_EVENTO == 'M5') {
                              await this.eatPayefRepository.query(`INSERT INTO sera.COMER_PAGOREF (
              REFERENCIA,
              NO_MOVIMIENTO,
              FECHA,
              MONTO,
              CVE_BANCO,
              CODIGO,
              ID_LOTE,
              VALIDO_SISTEMA,
              TIPO,
              RESULTADO,
              SUCURSAL,
              FECHA_REGISTRO,
              REFERENCIAORI,
              CUENTA,
              ID_CLIENTE,
              ID_TIPO_SAT)
       SELECT 
              TRIM(DLC.LC_SAE)||TRIM(DLC.LC_BANCO),
              1,
              CURRENT_DATE,
              DLC.MONTO,
              'INTERCAM',
              1,
              ELC.ID_LOTE,
              'A',
              'G',
              'Referencia Valida',
              1,
              CURRENT_DATE,
              TRIM(DLC.LC_SAE)||TRIM(DLC.LC_BANCO),
              'CUENTA',
              ELC.ID_CLIENTE,
              99
         FROM COMER_LC ELC
         INNER JOIN COMER_DET_LC DLC ON ELC.ID_LC = DLC.ID_LC
        WHERE ID_EVENTO = ${n_ID_EVENTO}`);

                              await this.eatClientByEventRepository
                                    .query(`INSERT INTO SERA.COMER_CLIENTESXEVENTO (ID_EVENTO,
            ID_CLIENTE,
            PROCESADO,
            PROCESAR,
            FECHA_EJECUCION,
            ENVIADO_SIRSAE,
            FECHA_ENVIO,
            ENVIAR_SIRSAE,
            MODIFICAR_ESTATUS)
     SELECT DISTINCT ID_EVENTO,
                     ID_CLIENTE,
                     'N',
                     'N',
                     null::date,
                     'N',
                     null::date,
                     'N',
                     'N'
       FROM SERA.COMER_LOTES CL
      WHERE ID_EVENTO = n_ID_EVENTO
        AND ID_CLIENTE IS NOT NULL
        AND ID_CLIENTE NOT IN (SELECT ID_CLIENTE
                                 FROM SERA.COMER_CLIENTESXEVENTO
                                WHERE ID_EVENTO = CL.ID_EVENTO)`);

                              await this.eatClientByEventRepository
                                    .query(`UPDATE SERA.COMER_CLIENTESXEVENTO
                                SET PROCESAR = 'S',
                                    PROCESADO = 'N',
                                    ENVIADO_SIRSAE = 'N',
                                    ENVIAR_SIRSAE = 'N'
                              WHERE ID_EVENTO = ${n_ID_EVENTO};`);

                              await this.eatTpEventRepositoy.query(`SELECT CASE
                              WHEN '${c_DIRECCION}' = 'I' THEN COALESCE(MOD(ID_TIPO_DISP, 10), 1)
                              ELSE COALESCE(TRUNC(ID_TIPO_DISP / 10), 1)
                            END
                     INTO n_CVE_EJEC
                     FROM SERA.COMER_TPEVENTOS
                     WHERE ID_TPEVENTO = ${n_ID_TPEVENTO}`);
                              /*
                    
                     
                     PA_DISPMUEBLES (n_ID_EVENTO,
                                     n_CVE_EJEC,
                                     '*',
                                     2,
                                     0,
                                     0,
                                     c_ERROR);*/

                              if (c_ERROR != 'Correcto.') {
                                    return {
                                          statusCode: HttpStatus.BAD_REQUEST,
                                          message: [`-20010, c_ERROR,1,400 ${c_ERROR}`],
                                    };
                              }
                        } else if (n_ID_TIPO_DISP != 3) {
                              await this.eatLotsRepository.query(`${c_QUERY3}`);
                        }

                        if ((c_DIRECCION = 'M')) {
                              // PA_REG_PCT (n_ID_EVENTO);
                              //PA_AJUSTE_IVA_MUEBLES (n_ID_EVENTO,
                              //                     c_ERROR);
                              if (c_ERROR != 'OK') {
                                    c_ERROR = 'Error ajustes IVA: ' + c_ERROR;

                                    return {
                                          statusCode: HttpStatus.BAD_REQUEST,
                                          message: [`${c_ERROR}`],
                                    };
                              }
                        }
                        //p_RESUL = 'OK';
                  }
            }
      }

      /* Archivo referencia PA_DISPMUEBLES.sql */

      /* == BEGIN CURSORS == */

      //CURSOR cu_MONTOS_VENTA: line 53 a 72
      async cuMontsVents(pc_ID_EVENTO: number, pc_CVE_EJEC: number) {
            return await this.eatLotsRepository
                  .query(`SELECT 
                              ID_CLIENTE, 
                              COALESCE( SUM(PRECIO_FINAL), 0 ) PRECIO_FINAL, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE( SUM(ANTICIPO), 0 ), COALESCE( SUM(PRECIO_FINAL), 0 ) ) ANTICIPO, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE( SUM(PRECIO_GARANTIA), 0 ), 0 ) PRECIO_GARANTIA, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE( SUM(MONTO_LIQ), 0 ), COALESCE( SUM(PRECIO_FINAL), 0 ) ) MONTO_LIQ, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE( SUM(GARANTIA_ASIG), 0 ), 0 ) GARANTIA_ASIG 
                        FROM 
                              sera.COMER_LOTES CL 
                        WHERE 
                              ID_ESTATUSVTA = 'VEN' 
                              AND ID_EVENTO = ${pc_ID_EVENTO} 
                              AND EXISTS ( SELECT 1 FROM sera.COMER_CLIENTESXEVENTO CXE WHERE CXE.ID_EVENTO = ${pc_ID_EVENTO} AND CXE.ID_CLIENTE = CL.ID_CLIENTE AND COALESCE(CXE.PROCESADO, 'N') = 'N' AND COALESCE(CXE.PROCESAR, 'N') = 'S' ) 
                              AND LOTE_PUBLICO != 0 
                        GROUP BY ID_CLIENTE 
                        ORDER BY ID_CLIENTE;`);
      }

      //CURSOR cu_MONTOS_LOTES: line 75 a 92
      async cuMontsLots(pc_ID_EVENTO: number, pc_ID_CLIENTE: number, pc_CVE_EJEC: number,) {
            return await this.eatLotsRepository
                  .query(`SELECT 
                              COALESCE(PRECIO_FINAL, 0) PRECIO_FINAL, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE(ANTICIPO, 0), COALESCE(PRECIO_FINAL, 0) ) ANTICIPO, 
                              --DECODE(${pc_CVE_EJEC},1,COALESCE(COALESCE((SELECT GARANTIAESPECIAL FROM COMER_PARAMETROSXLOTE WHERE ID_LOTE = CL.ID_LOTE),PRECIO_GARANTIA),0),0) PRECIO_GARANTIA,
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE(PRECIO_GARANTIA, 0), 0 ) PRECIO_GARANTIA, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE(MONTO_LIQ, 0), COALESCE(PRECIO_FINAL, 0) ) MONTO_LIQ, 
                              DECODE( ${pc_CVE_EJEC}, 1, COALESCE(GARANTIA_ASIG, 0), 0 ) GARANTIA_ASIG, 
                              ID_LOTE, 
                              LOTE_PUBLICO, 
                              NO_TRANSFERENTE 
                        FROM 
                              sera.COMER_LOTES 
                        WHERE 
                              ID_ESTATUSVTA = 'VEN' 
                              AND ID_EVENTO = ${pc_ID_EVENTO} 
                              AND ID_CLIENTE = ${pc_ID_CLIENTE} 
                              AND LOTE_PUBLICO != 0 
                        ORDER BY PRECIO_FINAL DESC;`);
      }

      //CURSOR cu_MONTOS_PAGOREF: line 94 a 111
      async cuMontsPagoRef(pc_ID_EVENTO: number, pc_ID_CLIENTE: number) {
            return await this.eatPayefRepository
                  .query(`SELECT 
                              ID_PAGO, 
                              REFERENCIA, 
                              NO_MOVIMIENTO, 
                              FECHA, 
                              COALESCE(MONTO, 0) MONTO, 
                              CVE_BANCO, 
                              CODIGO, 
                              ID_LOTE, 
                              TIPO, 
                              FECHA_REGISTRO, 
                              REFERENCIAORI, 
                              CUENTA, 
                              (SELECT NO_TRANSFERENTE FROM sera.COMER_LOTES WHERE ID_LOTE = CPR.ID_LOTE ) NO_TRANSFERENTE 
                        FROM 
                              sera.COMER_PAGOREF CPR, 
                              sera.COMER_PARAMETROSMOD MOD 
                        WHERE 
                              ID_LOTE IN ( SELECT ID_LOTE FROM sera.COMER_LOTES WHERE ID_ESTATUSVTA = 'VEN' AND ID_EVENTO = ${pc_ID_EVENTO} AND ID_CLIENTE = ${pc_ID_CLIENTE} AND LOTE_PUBLICO != 0 ) 
                              AND SUBSTR(REFERENCIA, 1, 1) NOT IN ('2', '3', '4', '7', '6') 
                              AND VALIDO_SISTEMA = 'A' 
                              AND CVE_BANCO = PARAMETRO 
                              AND DIRECCION = 'C' 
                              AND IDORDENINGRESO IS NULL 
                        FOR UPDATE 
                        OF VALIDO_SISTEMA 
                        ORDER BY NO_MOVIMIENTO;`);
      }

      //CURSOR cu_MONTOS_PAGOREF4: line 113 a 137
      async cuMontsPagRef4(pc_ID_LOTE: number, pc_CVE_EJEC: number) {
            return await this.eatPagosRefgensRepository
                  .query(`SELECT 
                              ID_PAGO, 
                              REFERENCIA, 
                              NO_MOVIMIENTO, 
                              FECHA, 
                              COALESCE(MONTO, 0) MONTO, 
                              CVE_BANCO, 
                              CODIGO, 
                              ID_LOTE, 
                              TIPO, 
                              FECHA_REGISTRO, 
                              REFERENCIAORI, 
                              CUENTA, 
                              (SELECT NO_TRANSFERENTE 
                              FROM sera.COMER_LOTES 
                              WHERE ID_LOTE = CPR.ID_LOTE) NO_TRANSFERENTE, 
                              COALESCE((  SELECT MONTO_PENA FROM sera.COMER_DET_LC WHERE ID_DET_LC = ( SELECT MAX(ID_DET_LC) FROM sera.COMER_DET_LC WHERE ID_LC IN (SELECT ID_LC FROM sera.COMER_LC WHERE ID_LOTE = CPR.ID_LOTE) AND LTRIM(RTRIM(LC_SAE)) || LTRIM(RTRIM(LC_BANCO)) = CPR.REFERENCIA)), 0) MONTO_PENA 
                        FROM 
                              sera.COMER_PAGOREF CPR, 
                              sera.COMER_PARAMETROSMOD MOD 
                        WHERE 
                              ID_LOTE = ${pc_ID_LOTE} 
                              AND ( ( ${pc_CVE_EJEC} = 1 AND SUBSTR(REFERENCIA, 1, 1) IN ('2', '3', '4', '7', '6') ) OR ( ${pc_CVE_EJEC}= 2 AND ID_PAGO IN ( SELECT ID_PAGO FROM sera.COMER_PAGOREF CP WHERE CP.ID_LOTE = ${pc_ID_LOTE} AND REFERENCIA IN ( SELECT REF_GSAE || REF_GBANCO FROM sera.COMER_LOTES CL, sera.COMER_REF_GARANTIAS CG WHERE CL.ID_LOTE = CG.ID_LOTE AND CL.ID_CLIENTE = CG.ID_CLIENTE AND CL.ID_LOTE = CP.ID_LOTE ) UNION SELECT ID_PAGO FROM sera.COMER_PAGOREF CP WHERE ID_LOTE = ${pc_ID_LOTE} AND SUBSTR( RTRIM( LTRIM(REFERENCIA)), 1, 1) IN ('2', '3', '4', '7', '6') ) ) ) 
                              AND VALIDO_SISTEMA = 'A' 
                              AND CVE_BANCO = PARAMETRO 
                              AND DIRECCION = 'C' 
                              AND IDORDENINGRESO IS NULL
                        FOR UPDATE
                        OF VALIDO_SISTEMA 
                        ORDER BY SUBSTR(REFERENCIA, 1, 1), NO_MOVIMIENTO;`);
      }

      //CURSOR cu_PAGOSREFGENS: line 139 a 148
      async cuPagosrefgens(pc_ID_LOTE: number) {
            return await this.eatPagosRefgensRepository
                  .query(`SELECT 
                              * 
                        FROM 
                              sera.COMER_PAGOSREFGENS CP 
                        WHERE 
                              ID_LOTE = ${pc_ID_LOTE}
                              AND TIPO = 'N' 
                              AND EXISTS ( SELECT 1 FROM sera.COMER_PAGOREF WHERE ID_PAGO = CP.ID_PAGO AND IDORDENINGRESO IS NULL ) 
                        FOR UPDATE 
                        OF MONTO, IVA, MONTO_NOAPP_IVA, TIPO 
                        ORDER BY ID_PAGOREFGENS;`);
      }

      //CURSOR C3: line 878 a 884
      async c3(PLOTE: number) {
            return await this.eatPagosRefgensRepository
                  .query(`SELECT 
                              BXL.PCTSLOTE, 
                              COALESCE(CAT.CVMAN, '0'), 
                              BXL.NO_BIEN, 
                              SUBSTR(BIE.DESCRIPCION, 1, 438), 
                              BXL.PRECIO_SIN_IVA, 
                              BXL.MONTO_NOAPP_IVA, 
                              BXL.IVA_FINAL 
                        FROM 
                              sera.COMER_BIENESXLOTE BXL, 
                              sera.CAT_TRANSFERENTE CAT, 
                              sera.BIENES BIE 
                        WHERE 
                              BXL.ID_LOTE = ${PLOTE} 
                              AND BIE.NO_BIEN = BXL.NO_BIEN 
                              AND BXL.NO_TRANSFERENTE = CAT.NO_TRANSFERENTE 
                        ORDER BY BXL.NO_BIEN;`);
      }

      //CURSOR C4: line 886 a 891
      async c4(pc_ID_LOTE: number) {
            return await this.eatPagosRefgensRepository
                  .query(`SELECT 
                              BXL.NO_BIEN 
                        FROM 
                              sera.COMER_BIENESXLOTE BXL 
                        WHERE 
                              BXL.ID_LOTE = ${pc_ID_LOTE} 
                        ORDER BY BXL.NO_BIEN;`);
      }

      /* == BEGIN FUNCTIONS == */

      //FUNCTION OBT_PARAMETROS: line 562 a 722
      async obtParametros(P_EVENTO: number, PDIREC: string) {
            let nf_ID_TPEVENTO: number;
            let G_NUMLOTES: number;
            let G_AREA;
            let G_UR;
            let G_TPOPERACION;
            let auxi = await this.eatEventRepository.query(`SELECT 
                                                             ID_TPEVENTO 
                                                            FROM 
                                                             sera.COMER_EVENTOS 
                                                            WHERE 
                                                             ID_EVENTO = ${P_EVENTO}`);
            nf_ID_TPEVENTO = auxi[0].id_tpevento;
            if (auxi.length == 0) {
                  nf_ID_TPEVENTO = 1;
            }

            if ((nf_ID_TPEVENTO = 5)) {
                  G_NUMLOTES = 0;
            } else {
                  let auxi = await this.eatParametersModRepository.query(`SELECT 
                                                                         TO_NUMBER(VALOR) 
                                                                        FROM 
                                                                         sera.COMER_PARAMETROSMOD PAR, 
                                                                         sera.COMER_EVENTOS EVE 
                                                                        WHERE 
                                                                         PAR.PARAMETRO = 'NUMLOTGARLICP' 
                                                                         AND PAR.DIRECCION = 'C' 
                                                                         AND EVE.ID_EVENTO = P_EVENTO 
                                                                         AND PAR.ID_TPEVENTO = EVE.ID_TPEVENTO;`);
                  G_NUMLOTES = auxi[0]?.to_number;

                  if (auxi.length == 0) {
                        return 'NO EXISTE EL PARAMETRO NUMLOTGARLICP PARA EL TIPO DE EVENTO';
                  }
            }

            let auxi1 = await this.eatParametersModRepository.query(`SELECT VALOR    
    FROM   COMER_PARAMETROSMOD PAR
    WHERE  PAR.PARAMETRO = 'UR'
    AND    PAR.DIRECCION = 'C'
    AND    COALESCE(PAR.ID_TPEVENTO,0) = DECODE(nf_ID_TPEVENTO,5,0,0); -- JACG 27-10-17 Se ajusta el parámetro para que los eventos tipo 5, también tomen el genérico, a solicitud de Alejandro Ledesma y autorización de Mario Zamorano --
    EXCEPTION WHEN NO_DATA_FOUND THEN
            RETURN 'NO EXISTE EL PARAMETRO UR';`);

            G_UR = auxi1[0]?.valor;

            let auxi2 = await this.eatParametersModRepository
                  .query(` SELECT    TO_NUMBER(VALOR)
    FROM    COMER_PARAMETROSMOD PAR
    WHERE    PAR.PARAMETRO = 'TPOPERACION'
    AND        PAR.DIRECCION = PDIREC
    AND PAR.ID_TPEVENTO IS NULL;`);
            G_TPOPERACION = auxi2[0].to_number

      }

      /* == BEGIN PROCEDURES == */

      //PROCEDURE PA_DISPMUEBLES_INS: line 242
      async paDismuebleIns(
            pi_ID_PAGOREFGENS: number,
            pi_ID_PAGO: number,
            pi_ID_LOTE: number,
            pi_MONTO: number,
            pi_REFERENCIA: string,
            pi_TIPOINGRESO: string,
            pi_NO_TRANSFERENTE: number,
            pi_IVA: number,
            pi_MONTO_APP_IVA: number,
            pi_MONTO_NOAPP_IVA: number,
            pi_TIPO: string,
            pi_ID_EVENTO: number,
            pi_FECHA_PROCESO: Date,
            pi_MONTO_CHATARRA: number,
            pi_RESUL: string,
      ) {
            let ni_ID_PAGOREFGENS = pi_ID_PAGOREFGENS;
            let ni_ID_PAGO = pi_ID_PAGO;
            let ni_ID_LOTE = pi_ID_LOTE;
            let ni_MONTO = pi_MONTO;
            let ci_REFERENCIA = pi_REFERENCIA;
            let ci_TIPOINGRESO = pi_TIPOINGRESO;
            let ni_NO_TRANSFERENTE = pi_NO_TRANSFERENTE;
            let ni_IVA = pi_IVA;
            let ni_MONTO_APP_IVA = pi_MONTO_APP_IVA;
            let ni_MONTO_NOAPP_IVA = pi_MONTO_NOAPP_IVA;
            let ci_TIPO = pi_TIPO;
            let ni_ID_EVENTO = pi_ID_EVENTO;
            let fi_FECHA_PROCESO = pi_FECHA_PROCESO;
            let ni_MONTO_CHATARRA = pi_MONTO_CHATARRA;
            let ci_RESUL = pi_RESUL;

            try {
                  const queryString = await this.eatPagosRefgensRepository.query(`INSERT INTO COMER_PAGOSREFGENS (ID_PAGOREFGENS,
                                       ID_PAGO,
                                       ID_LOTE,
                                       MONTO,
                                       REFERENCIA,
                                       TIPOINGRESO,
                                       NO_TRANSFERENTE,
                                       IVA,
                                       MONTO_APP_IVA,
                                       MONTO_NOAPP_IVA,
                                       TIPO,
                                       ID_EVENTO,
                                       FECHA_PROCESO,
                                       MONTO_CHATARRA)
                               VALUES (${ni_ID_PAGOREFGENS},
                                       ${ni_ID_PAGO},
                                       ${ni_ID_LOTE},
                                       ${ni_MONTO},
                                       ${ci_REFERENCIA},
                                       ${ci_TIPOINGRESO},
                                       ${ni_NO_TRANSFERENTE},
                                       ${ni_IVA},
                                       ${ni_MONTO_APP_IVA},
                                       ${ni_MONTO_NOAPP_IVA},
                                       ${ci_TIPO},
                                       ${ni_ID_EVENTO},
                                       ${fi_FECHA_PROCESO},
                                       ${ni_MONTO_CHATARRA})`);
                  if (queryString) {
                        return {
                              message: ci_RESUL != "" ? ci_RESUL : 'Inserción a COMER_PAGOSREFGENS correcta.',
                              data: queryString
                        };
                  }
            } catch (error) {
                  return error.message;
            }

      }

      //PROCEDURE PA_DISPMUEBLES_DE1: line 326
      async paDismueblesDe1(idEvent: number) {
            try {

                  let count: number;
                  console.log(idEvent);
                  let p_RESUL: string;

                  let auxi = await this.eatPagosRefgensRepository.query(`SELECT COUNT(0)
  
    FROM sera.COMER_PAGOSREFGENS CP
   WHERE ID_LOTE IN (SELECT ID_LOTE
                       FROM sera.COMER_LOTES CL
                      WHERE ID_ESTATUSVTA = 'VEN'
                        AND ID_EVENTO = ${idEvent}
                        AND EXISTS (SELECT 1
                                      FROM sera.COMER_CLIENTESXEVENTO CXE
                                     WHERE CXE.ID_EVENTO = ${idEvent}
                                       AND CXE.ID_CLIENTE = CL.ID_CLIENTE
                                       AND COALESCE(CXE.PROCESADO,'N') = 'N'
                                       AND COALESCE(CXE.PROCESAR,'N') = 'S')
                        AND LOTE_PUBLICO != 0)
     AND EXISTS (SELECT 1
                   FROM sera.COMER_PAGOREF
                  WHERE ID_PAGO = CP.ID_PAGO
                    AND IDORDENINGRESO IS NULL);`);
                  count = auxi[0]?.count;
                  console.log(count);
                  if (count > 0) {
                        await this.eatPagosRefgensRepository
                              .query(`DELETE FROM COMER_PAGOSREFGENS CP
                      WHERE ID_LOTE IN (SELECT ID_LOTE
                                          FROM sera.COMER_LOTES CL
                                         WHERE ID_ESTATUSVTA = 'VEN'
                                           AND ID_EVENTO = ${idEvent}
                                           AND EXISTS (SELECT 1
                                                         FROM sera.COMER_CLIENTESXEVENTO CXE
                                                        WHERE CXE.ID_EVENTO = ${idEvent}
                                                          AND CXE.ID_CLIENTE = CL.ID_CLIENTE
                                                          AND COALESCE(CXE.PROCESADO,'N') = 'N'
                                                          AND COALESCE(CXE.PROCESAR,'N') = 'S')
                                           AND LOTE_PUBLICO != 0)
                        AND EXISTS (SELECT 1
                                      FROM sera.COMER_PAGOREF
                                     WHERE ID_PAGO = CP.ID_PAGO
                                       AND IDORDENINGRESO IS NULL);`);
                  }

                  return p_RESUL = 'Borrado de COMER_PAGOSREFGENS correcta.';
                  /**EXCEPTION
                  WHEN OTHERS THEN
                     p_RESUL := DBMS_UTILITY.FORMAT_ERROR_BACKTRACE; */
            } catch (error) {
                  console.log(error);
            }
      }

      //PROCEDURE PA_DISPMUEBLES_DE2: line 377 a 413
      async paDismueblesDe2(pi_RESUL: string, tab_SALDOS: any) {
            let ni_TCANT_LOTES: number;
            let ni_TLOTE: number;
            let ni_CONT: number;

            let ci_RESUL: string = pi_RESUL;
            try {

                  if (ni_TCANT_LOTES > 0) {
                        ni_TCANT_LOTES = tab_SALDOS.COUNT;
                        while (ni_TLOTE != 0) {
                              ni_CONT = await this.eatPagosRefgensRepository
                                    .query(`SELECT COUNT(0)
                                    FROM COMER_PAGOSREFGENS CP
                                    WHERE ID_LOTE = ${ni_TLOTE}
                                    AND EXISTS (SELECT 1
                                          FROM COMER_PAGOREF
                                          WHERE ID_PAGO = CP.ID_PAGO
                                          AND IDORDENINGRESO IS NULL);`);

                              if (ni_CONT > 0) {
                                    await this.eatPagosRefgensRepository
                                          .query(`DELETE FROM sera.COMER_PAGOSREFGENS CP
                                                WHERE ID_LOTE = ${ni_TLOTE}
                                                AND EXISTS (SELECT 1
                                                      FROM sera.COMER_PAGOREF
                                                      WHERE ID_PAGO = CP.ID_PAGO
                                                      AND IDORDENINGRESO IS NULL);`);
                              }

                              ni_TLOTE = tab_SALDOS.NEXT(ni_TLOTE);

                              return {
                                    p_RESUL: 'Borrado de COMER_PAGOSREFGENS correcta.',
                              };
                        }
                  }

            } catch (error) {
                  return {
                        p_RESUL: error.message,
                  };
            }
      }

      //PROCEDURE UTIL_DECGROUP: line 415 a 500
      async utilDecgroup(PMONTO: number) {
            let UD_SUMA: number = 0;
            let PRIMERA_VEZ: number = 1;
            let H: number = 0;
            let UD_NUEVO: number = 1;
            let UD_POS: number = 0;
            let UD_DIF: number;
            let UD_MAYOR: number = 0;
            let UD_AJUIMP: number = 0;
            let UD_AJUIVA: number = 0;
            let UD_AJUSIVA: number = 0;
            let UD_AUX1: number = 0;

            //DETAUX.DELETE

            /*   FOR L IN COALESCE(DETOI.FIRST,0)..COALESCE(DETOI.LAST,-1) LOOP -- PARA AJUSTE DE DECIMALES
                 IF DETOI(L).IMPORTE > 0 THEN
                     UD_SUMA := UD_SUMA + DETOI(L).IMPORTE + DETOI(L).IVA + DETOI(L).MONSIVA;
                 END IF;
              END LOOP;*/

            /*   FOR L IN COALESCE(DETOI.FIRST,0)..COALESCE(DETOI.LAST,-1) LOOP 
                 IF PRIMERA_VEZ = 1 THEN
                    H = H + 1;
                    DETAUX(H).IDENTIFICADOR = DETOI(L).IDENTIFICADOR;
                    DETAUX(H).MANDATO    = DETOI(L).MANDATO;
                    DETAUX(H).INGRESO    = DETOI(L).INGRESO;
                    DETAUX(H).IMPORTE    = DETOI(L).IMPORTE;
                    DETAUX(H).IVA        = DETOI(L).IVA;
                    DETAUX(H).REFERENCIA    = DETOI(L).REFERENCIA;
                    DETAUX(H).INDTIPO    = DETOI(L).INDTIPO;
                    DETAUX(H).LOTESIAB    = DETOI(L).LOTESIAB;
                    DETAUX(H).DESCRIPCION    = DETOI(L).DESCRIPCION;
                    DETAUX(H).EVENTO    = DETOI(L).EVENTO;
                    DETAUX(H).LOTE        = DETOI(L).LOTE;
                    DETAUX(H).VTALOTE    = DETOI(L).VTALOTE;
                    DETAUX(H).MONTORET    = DETOI(L).MONTORET;
                    DETAUX(H).MONSIVA    = DETOI(L).MONSIVA;
                 ELSE
                    UD_NUEVO = 1;
                    FOR I IN COALESCE(DETAUX.FIRST,0)..COALESCE(DETAUX.LAST,-1) LOOP 
                       IF DETAUX(I).MANDATO = DETOI(L).MANDATO THEN
                          DETAUX(I).IMPORTE := DETAUX(I).IMPORTE + DETOI(L).IMPORTE;
                          DETAUX(I).IVA := DETAUX(I).IVA + DETOI(L).IVA;
                          DETAUX(I).MONSIVA := DETAUX(I).MONSIVA + DETOI(L).MONSIVA;
                          DETAUX(I).MONTORET:= DETAUX(I).MONTORET + DETOI(L).MONTORET;
                          UD_NUEVO := 0;
                          EXIT;
                       END IF;
                    END LOOP;
                    IF UD_NUEVO = 1 THEN
                       H := H + 1;
                       DETAUX(H).IDENTIFICADOR := DETOI(L).IDENTIFICADOR;
                       DETAUX(H).MANDATO    := DETOI(L).MANDATO;
                       DETAUX(H).INGRESO    := DETOI(L).INGRESO;
                       DETAUX(H).IMPORTE    := DETOI(L).IMPORTE;
                       DETAUX(H).IVA        := DETOI(L).IVA;
                       DETAUX(H).REFERENCIA    := DETOI(L).REFERENCIA;
                       DETAUX(H).INDTIPO    := DETOI(L).INDTIPO;
                       DETAUX(H).LOTESIAB    := DETOI(L).LOTESIAB;
                       DETAUX(H).DESCRIPCION    := DETOI(L).DESCRIPCION;
                       DETAUX(H).EVENTO    := DETOI(L).EVENTO;
                       DETAUX(H).LOTE        := DETOI(L).LOTE;
                       DETAUX(H).VTALOTE    := DETOI(L).VTALOTE;
                       DETAUX(H).MONTORET    := DETOI(L).MONTORET;
                       DETAUX(H).MONSIVA    := DETOI(L).MONSIVA;
                    END IF;
                 END IF;
                 PRIMERA_VEZ = PRIMERA_VEZ + 1;
                 END LOOP;*/
            if (PMONTO != UD_SUMA) {
                  UD_DIF = PMONTO - UD_SUMA;
                  /* FOR L IN COALESCE(DETAUX.FIRST,0)..COALESCE(DETAUX.LAST,-1) LOOP
                        IF UD_MAYOR < DETAUX(L).IMPORTE + DETAUX(L).MONSIVA THEN
                           UD_MAYOR := DETAUX(L).IMPORTE + DETAUX(L).MONSIVA;
                           UD_POS := L;
                        END IF;
                     END LOOP;*/
                  //UD_AUX1 := DETAUX(UD_POS).IMPORTE + DETAUX(UD_POS).IVA + UD_DIF;
                  // UD_AJUIMP = UD_AUX1/G_IVA;
                  UD_AJUIVA = UD_AUX1 - UD_AJUIMP;
                  // DETAUX(UD_POS).IMPORTE := UD_AJUIMP;
                  // DETAUX(UD_POS).IVA := UD_AJUIVA;
            }
      }

      //PROCEDURE ACTMAN_BIELOTE: line 502 a 560
      async actmanBielote(PEVENTO: number) {
            let n_CVE_EJEC;
            let n_TCANT_LOTES;
            let tab_SALDOS;
            let n_TLOTE;
            if (n_CVE_EJEC == 1 || n_CVE_EJEC == 3) {
                  await this.eatGoodByLotRepository.query(`UPDATE COMER_BIENESXLOTE BXL
       SET NO_TRANSFERENTE =(SELECT NO_TRANSFERENTE
                               FROM EXPEDIENTES EXP, BIENES BIE1
                              WHERE EXP.NO_EXPEDIENTE = BIE1.NO_EXPEDIENTE
                                AND BXL.NO_BIEN = BIE1.NO_BIEN)
     WHERE EXISTS (SELECT 1
                     FROM COMER_LOTES LOT
                    WHERE BXL.ID_LOTE = LOT.ID_LOTE
                      AND EXISTS (SELECT 1
                                    FROM COMER_CLIENTESXEVENTO CXE
                                   WHERE CXE.ID_EVENTO = PEVENTO
                                     AND CXE.ID_CLIENTE = LOT.ID_CLIENTE
                                     AND COALESCE(CXE.PROCESADO,'N') = 'S'
                                     AND COALESCE(CXE.PROCESAR,'N') = 'S'
                                     AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                                     AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'N')
                      AND EXISTS (SELECT 1
                                    FROM COMER_EVENTOS EVE
                                   WHERE EVE.ID_EVENTO =${PEVENTO} 
                                     AND EVE.ID_EVENTO = LOT.ID_EVENTO));`);

                  await this.eatLotsRepository.query(`UPDATE COMER_LOTES LOT
       SET NO_TRANSFERENTE = (SELECT NO_TRANSFERENTE
                                FROM COMER_BIENESXLOTE BXL
                               WHERE BXL.ID_LOTE = LOT.ID_LOTE
                                 AND ROWNUM = 1)
     WHERE EXISTS (SELECT 1
                     FROM COMER_CLIENTESXEVENTO CXE
                    WHERE CXE.ID_EVENTO = PEVENTO
                      AND CXE.ID_CLIENTE = LOT.ID_CLIENTE
                      AND COALESCE(CXE.PROCESADO,'N') = 'S'
                      AND COALESCE(CXE.PROCESAR,'N') = 'S'
                      AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                      AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'N');`);
            } else {
                  n_TCANT_LOTES = tab_SALDOS.COUNT;
                  if (n_TCANT_LOTES > 0) {
                        n_TLOTE = tab_SALDOS.FIRST;
                        while (n_TLOTE != null) {
                              await this.eatGoodByLotRepository.query(`UPDATE COMER_BIENESXLOTE BXL
             SET NO_TRANSFERENTE =(SELECT NO_TRANSFERENTE
                                     FROM EXPEDIENTES EXP, BIENES BIE1
                                    WHERE EXP.NO_EXPEDIENTE = BIE1.NO_EXPEDIENTE
                                      AND BXL.NO_BIEN = BIE1.NO_BIEN)
           WHERE ID_LOTE = n_TLOTE;`);

                              await this.eatLotsRepository.query(` UPDATE COMER_LOTES LOT
             SET NO_TRANSFERENTE = (SELECT NO_TRANSFERENTE
                                      FROM COMER_BIENESXLOTE BXL
                                     WHERE BXL.ID_LOTE = LOT.ID_LOTE
                                       AND ROWNUM = 1)
           WHERE ID_LOTE = n_TLOTE;`);

                              // n_TLOTE = tab_SALDOS.NEXT(n_TLOTE);
                        }
                  }
            }
      }

      //PROCEDURE PREP_OI_BORRA: line  724 a 815
      async prepOIBorra(lEvento: number) {
            console.log(lEvento);
            let nCuentaReg;
            let nCveEjec;
            nCveEjec = 1;
            let nTCantLotes, nTLote;
            let tab_SALDOS = [];
            let result;

            if (nCveEjec == 1 || nCveEjec == 3) {
                  try {
                        nCuentaReg = await this.eatPagosRefgensRepository.query(
                              `SELECT COUNT(0) FROM sera.COMER_DETALLES DET
                              WHERE DET.ID_EVENTO = ${lEvento} 
                              AND DET.IDORDENGRABADA IS NULL
                              AND EXISTS (
                                    SELECT 1 FROM sera.COMER_CLIENTESXEVENTO CXE, sera.COMER_LOTES LOT
                                    WHERE CXE.id_evento = ${lEvento}
                                    AND DET.ID_LOTE = LOT.ID_LOTE
                                    AND CXE.ID_CLIENTE = LOT.ID_CLIENTE
                                    AND COALESCE(CXE.PROCESADO,'N') = 'S'
                                    AND COALESCE(CXE.PROCESAR,'N') = 'S'
                                    AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                                    AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'S');`);

                        if (nCuentaReg > 0) {
                              let queryDelete = await this.eatPagosRefgensRepository.query(
                                    `DELETE FROM sera.COMER_DETALLES DET
                                    WHERE DET.ID_EVENTO = ${lEvento} 
                                    AND DET.IDORDENGRABADA IS NULL
                                    AND EXISTS (
                                          SELECT 1 FROM sera.COMER_CLIENTESXEVENTO CXE, sera.COMER_LOTES LOT
                                          WHERE CXE.id_evento = ${lEvento}
                                          AND DET.ID_LOTE = LOT.ID_LOTE
                                          AND CXE.ID_CLIENTE = LOT.ID_CLIENTE
                                          AND COALESCE(CXE.PROCESADO,'N') = 'S'
                                          AND COALESCE(CXE.PROCESAR,'N') = 'S'
                                          AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                                          AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'S');`);
                              result = {
                                    statusCode: HttpStatus.OK,
                                    message: 'OK',
                                    data: queryDelete,
                              };
                        } else {
                              result = {
                                    statusCode: HttpStatus.NO_CONTENT,
                                    message: 'NO_CONTENT 1',
                                    data: nCuentaReg,
                              };
                        }
                  } catch (error) {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: error.message,
                              data: [],
                        };
                  }

                  try {
                        nCuentaReg = await this.eatPagosRefgensRepository.query(
                              `SELECT COUNT(0) FROM sera.COMER_CABECERAS CAB
                              WHERE CAB.ID_EVENTO = ${lEvento}  
                              AND CAB.IDORDENGRABADA IS NULL
                              AND  CAB.CLIENTE_RFC IN (SELECT CLI.RFC FROM sera.COMER_CLIENTES CLI, sera.COMER_CLIENTESXEVENTO CXE
                                    WHERE CXE.ID_EVENTO = ${lEvento}
                                    AND CLI.ID_CLIENTE = CXE.ID_CLIENTE
                                    AND COALESCE(CXE.PROCESADO,'N') = 'S'
                                    AND COALESCE(CXE.PROCESAR,'N') = 'S'
                                    AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                                    AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'N');`);

                        if (nCuentaReg > 0) {
                              let queryDelete = await this.eatPagosRefgensRepository.query(
                                    `DELETE FROM sera.COMER_CABECERAS CAB
                                    WHERE CAB.ID_EVENTO = ${lEvento}  
                                    AND CAB.IDORDENGRABADA IS NULL
                                    AND CAB.CLIENTE_RFC IN (SELECT CLI.RFC FROM sera.COMER_CLIENTES CLI, sera.COMER_CLIENTESXEVENTO CXE
                                          WHERE CXE.ID_EVENTO = ${lEvento}
                                          AND CLI.ID_CLIENTE = CXE.ID_CLIENTE
                                          AND COALESCE(CXE.PROCESADO,'N') = 'S'
                                          AND COALESCE(CXE.PROCESAR,'N') = 'S'
                                          AND COALESCE(CXE.ENVIAR_SIRSAE,'N') = 'S'
                                          AND COALESCE(CXE.ENVIADO_SIRSAE,'N') = 'N');`);
                              result = {
                                    statusCode: HttpStatus.OK,
                                    message: 'OK',
                                    data: queryDelete,
                              };

                        } else {
                              result = {
                                    statusCode: HttpStatus.NO_CONTENT,
                                    message: 'NO_CONTENT 2',
                                    data: nCuentaReg,
                              };
                        }
                  } catch (error) {
                        return {
                              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                              message: error.message,
                              data: [],
                        };
                  }
            } else {
                  result = {
                        statusCode: HttpStatus.OK,
                        message: 'OK',
                        data: [],
                  };
            }

            return result;
      }

      //PROCEDURE PREP_OI: line 817 a 1144
      async prepOI() {

      }

      //PROCEDURE PA_DEPURA: line 1145 a 1292
      async paDepura() {
            let nCuentaReg;
            let nCveEjec = 1;
            let nIdEvento = 1;
            let nRelCliente = 1;
            let estatusComer;
            let cRelLotes = "";
            if ([1, 3].includes(nCveEjec)) {
                  try {
                        const queryresult1 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_PAGOREF
                              SET VALIDO_SISTEMA = 'A'
                              WHERE ID_LOTE IN (SELECT ID_LOTE
                                                FROM sera.COMER_LOTES
                                          WHERE ID_EVENTO = ${nIdEvento}
                                                AND ID_CLIENTE = ${nRelCliente}
                                                AND LOTE_PUBLICO != 0)
                              AND VALIDO_SISTEMA = 'S' 
                              AND IDORDENINGRESO IS NULL;
                        `);

                        const queryresult2 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_LOTES
                              SET ID_ESTATUSVTA = 'VEN'
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND ID_CLIENTE = ${nRelCliente}
                              AND LOTE_PUBLICO != 0;
                        `);

                        const queryresult3 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_BIENESXLOTE
                              SET ESTATUS_ANT = ESTATUS_COMER,
                              ESTATUS_COMER = 'CPV'
                              WHERE ID_LOTE IN (SELECT ID_LOTE
                                                FROM sera.COMER_LOTES
                                          WHERE ID_EVENTO = ${nIdEvento}
                                                AND ID_CLIENTE = ${nRelCliente}
                                                AND LOTE_PUBLICO != 0);
                        `);

                        const queryresult4 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.BIENES
                              SET ESTATUS = 'VEN'
                              WHERE NO_BIEN IN (SELECT NO_BIEN
                                                FROM sera.COMER_BIENESXLOTE
                                          WHERE ID_LOTE IN (SELECT ID_LOTE
                                                                  FROM sera.COMER_LOTES
                                                                  WHERE ID_EVENTO = ${nIdEvento}
                                                                  AND ID_CLIENTE = ${nRelCliente}
                                                                  AND LOTE_PUBLICO != 0));
                        `);

                        const queryresult5 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.BIENES
                              SET ESTATUS = 'VEN'
                              WHERE NO_BIEN IN (SELECT NO_BIEN
                                                FROM sera.COMER_BIENESXLOTE
                                          WHERE ID_LOTE IN (SELECT ID_LOTE
                                                                  FROM sera.COMER_LOTES
                                                                  WHERE ID_EVENTO = ${nIdEvento}
                                                                  AND ID_CLIENTE = ${nRelCliente}
                                                                  AND LOTE_PUBLICO != 0));
                        `);

                        const queryresult6 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_CLIENTESXEVENTO
                              SET PROCESADO = 'N',
                                    PROCESAR = 'S',
                                    ENVIAR_SIRSAE = 'N',
                                    ENVIADO_SIRSAE = 'N',
                                    FECHA_EJECUCION = NULL
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND ID_CLIENTE = ${nRelCliente};
                        `);

                        const queryresult7 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_CLIENTESXEVENTO
                              SET PROCESADO = 'N',
                                    PROCESAR = 'S',
                                    ENVIAR_SIRSAE = 'N',
                                    ENVIADO_SIRSAE = 'N',
                                    FECHA_EJECUCION = NULL
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND ID_CLIENTE = ${nRelCliente};
                        `);

                        const reRelLotes = await this.eatPagosRefgensRepository.query(` 
                              SELECT ID_CLIENTE, LOTE_PUBLICO
                              FROM sera.COMER_LOTES
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND ID_CLIENTE = ${nRelCliente}
                              AND LOTE_PUBLICO != 0;
                        `);
                        console.log(reRelLotes);

                        nCuentaReg = await this.eatPagosRefgensRepository.query(` 
                              SELECT COUNT(0)
                              FROM sera.COMER_DETALLES DET
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND EXISTS (SELECT 1
                                          FROM sera.COMER_LOTES LOT
                                          WHERE LOT.ID_EVENTO = ${nIdEvento}
                                          AND LOT.ID_CLIENTE = ${nRelCliente}
                                          AND DET.ID_LOTE = LOT.ID_LOTE)
                              AND IDORDENGRABADA IS NULL;
                        `);
                        console.log(nCuentaReg);

                        if (nCuentaReg > 0) {
                              const queryresult8 = await this.eatPagosRefgensRepository.query(` 
                                    DELETE sera.COMER_DETALLES DET
                                    WHERE ID_EVENTO = ${nIdEvento}
                                    AND EXISTS (SELECT 1
                                                FROM sera.COMER_LOTES LOT
                                                WHERE LOT.ID_EVENTO = ${nIdEvento}
                                                AND LOT.ID_CLIENTE = ${nRelCliente}
                                                AND DET.ID_LOTE = LOT.ID_LOTE)
                                    AND IDORDENGRABADA IS NULL;
                              `);
                        }

                        nCuentaReg = await this.eatPagosRefgensRepository.query(` 
                              SELECT COUNT(0)
                              FROM sera.COMER_CABECERAS CAB
                              WHERE CAB.ID_EVENTO = ${nIdEvento}
                              AND  CAB.CLIENTE_RFC = (SELECT CLI.RFC
                                                      FROM sera.COMER_CLIENTES CLI
                                                      WHERE CLI.ID_CLIENTE = ${nRelCliente})
                              AND IDORDENGRABADA IS NULL;
                        `);
                        console.log(nCuentaReg);

                        if (nCuentaReg > 0) {
                              const queryresult9 = await this.eatPagosRefgensRepository.query(` 
                                    DELETE sera.COMER_CABECERAS CAB
                                    WHERE CAB.ID_EVENTO = ${nIdEvento}
                                    AND CAB.CLIENTE_RFC IN (SELECT CLI.RFC
                                                            FROM sera.COMER_CLIENTES CLI
                                                      WHERE CLI.ID_CLIENTE = ${nRelCliente})
                                    AND IDORDENGRABADA IS NULL;
                              `);
                        }

                  } catch (error) {
                        return {
                              statusCode: 500,
                              message: error
                        };
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: 'OK'
                  };
            } else {
                  try {
                        const queryresult1 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_PAGOREF
                              SET VALIDO_SISTEMA = 'A'
                              WHERE ID_LOTE = ${Number(cRelLotes)}
                              AND VALIDO_SISTEMA = 'S' 
                              AND IDORDENINGRESO IS NULL;
                        `);

                        const queryresult2 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_LOTES
                              SET ID_ESTATUSVTA = 'VEN'
                              WHERE ID_LOTE = ${Number(cRelLotes)};
                        `);

                        const queryresult3 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.COMER_BIENESXLOTE
                              SET ESTATUS_ANT = ESTATUS_COMER,
                              ESTATUS_COMER = 'CPV'
                              WHERE ID_LOTE = ${Number(cRelLotes)};
                        `);

                        const queryresult4 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.BIENES
                              SET ESTATUS = 'VEN'
                              WHERE NO_BIEN IN (SELECT NO_BIEN
                                                FROM sera.COMER_BIENESXLOTE
                                          WHERE ID_LOTE = ${Number(cRelLotes)});
                        `);

                        const queryresult5 = await this.eatPagosRefgensRepository.query(`
                              UPDATE sera.BIENES
                              SET ESTATUS = 'VEN'
                              WHERE NO_BIEN IN (SELECT NO_BIEN
                                                FROM sera.COMER_BIENESXLOTE
                                          WHERE ID_LOTE = ${Number(cRelLotes)});
                        `);

                        nCuentaReg = await this.eatPagosRefgensRepository.query(` 
                              SELECT COUNT(0)
                              FROM sera.COMER_DETALLES
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND ID_LOTE = ${Number(cRelLotes)}
                              AND IDORDENGRABADA IS NULL;
                        `);
                        console.log(nCuentaReg);

                        if (nCuentaReg > 0) {
                              const queryresult6 = await this.eatPagosRefgensRepository.query(` 
                                    DELETE FROM sera.COMER_DETALLES
                                    WHERE ID_EVENTO = ${nIdEvento}
                                    AND ID_LOTE = ${Number(cRelLotes)}
                                    AND IDORDENGRABADA IS NULL;
                              `);
                        }

                        nCuentaReg = await this.eatPagosRefgensRepository.query(` 
                              SELECT COUNT(0)
                              FROM sera.COMER_CABECERAS
                              WHERE ID_EVENTO = ${nIdEvento}
                              AND IDENTIFICADOR NOT IN (SELECT IDENTIFICADOR FROM sera.COMER_DETALLES WHERE ID_EVENTO = ${nIdEvento});
                        `);
                        console.log(nCuentaReg);

                        if (nCuentaReg > 0) {
                              const queryresult7 = await this.eatPagosRefgensRepository.query(` 
                                    DELETE FROM sera.COMER_CABECERAS
                                    WHERE ID_EVENTO = ${nIdEvento}
                                    AND IDENTIFICADOR NOT IN (SELECT IDENTIFICADOR FROM sera.COMER_DETALLES WHERE ID_EVENTO = ${nIdEvento});
                              `);
                        }

                        const clientesLote = await this.eatPagosRefgensRepository.query(` 
                              SELECT ID_CLIENTE, LOTE_PUBLICO
                              FROM sera.COMER_LOTES
                              WHERE ID_LOTE = ${cRelLotes};
                        `);
                        console.log(clientesLote);



                  } catch (error) {
                        return {
                              statusCode: 500,
                              message: error
                        };
                  }
                  return {
                        statusCode: HttpStatus.OK,
                        message: 'OK'
                  };
            }
      }

      /*p_ID_EVENTO   IN     COMER_REF_GARANTIAS.ID_EVENTO%TYPE,
      p_CVE_EJEC    IN     PLS_INTEGER, -- Especifica si la ejecución es por: 1 POR CLIENTE, 2 POR LOTE, 3 POR ADJUDICACIÓN DIRECTA --
      p_REL_LOTES   IN     VARCHAR2, -- Es la relación de Lotes a procesar, si * (Asterico) son todos los lotes --
      p_IND_FINAL   IN     PLS_INTEGER, -- Indica si el proceso es: 1 PARCIAL, 2 FINAL --
      p_REL_CLIENTE IN     NUMBER, -- Cliente que se realiza el reproceso --
      p_IND_REPRO   IN     PLS_INTEGER, */

      //PROCEDURE PA_DISPMUEBLES
      async paDispMuebles(dto: paDispMueblesDTO) {

            let {
                  pIdevento
                  , pCveejec
                  , pRelLotes
                  , pIndFinal
                  , pRelCliente
                  , pIndRepro
            } = dto
            console.log(dto);

            let cuAmountsVentas;
            let cError;
            /****CURSORS */
            const cuAmountsLots = await this.eatLotsRepository.createQueryBuilder("cl")
                  .select("cl.id_cliente", "idCliente")
                  .addSelect("COALESCE(SUM(cl.precio_final), 0)", "precioFinal")
                  .addSelect("CASE WHEN :cveEjec = 1 THEN COALESCE(SUM(cl.anticipo), 0) ELSE COALESCE(SUM(cl.precio_final), 0) END", "anticipo")
                  .addSelect("CASE WHEN :cveEjec = 1 THEN COALESCE(SUM(cl.precio_garantia), 0) ELSE 0 END", "precioGarantia")
                  .addSelect("CASE WHEN :cveEjec = 1 THEN COALESCE(SUM(cl.monto_liq), 0) ELSE COALESCE(SUM(cl.precio_final), 0) END", "montoLiq")
                  .addSelect("CASE WHEN :cveEjec = 1 THEN COALESCE(SUM(cl.garantia_asig), 0) ELSE 0 END", "garantiaAsig")
                  .where("cl.id_estatusvta = :estatusVenta", { estatusVenta: 'PAG' })
                  .andWhere("cl.id_evento = :idEvento", { idEvento: pIdevento })
                  .andWhere("cl.lote_publico != 0")
                  .andWhere(`EXISTS (
                    SELECT 1
                    FROM sera.COMER_CLIENTESXEVENTO CXE
                    
                  )`)
                  .setParameters({ cveEjec: pCveejec })
                  .groupBy("cl.id_cliente")
                  .orderBy("cl.id_cliente")
                  .getRawMany();

            /**WHERE CXE.ID_EVENTO = :idEvento
                            AND CXE.ID_CLIENTE = cl.ID_CLIENTE
                            AND COALESCE(CXE.PROCESADO, 'N') = 'N'
                            AND COALESCE(CXE.PROCESAR, 'N') = 'S' */
            if (![1, 2, 3].includes(pCveejec)) {
                  throw new Error('Proceso inválido');
            }

            let qb = await this.eatEventRepository
                  .findOne({
                        where: { idEvent: pIdevento },
                        select: ['processKey', 'idEventType', 'address', 'fallDate', 'notificationDate', 'eventCloseDate']
                  });
            if (!qb) {
                  throw new Error('No existe el evento');
            }
            const { processKey, idEventType, address, fallDate, notificationDate, eventCloseDate } = qb;

            // ejemplo de valor para n_ID_EVENTO

            let idPayRefGens = 0;
            let porcIva = 0;
            let taxIva = 0;

            try {
                  const result1 = await this.eatEventRepository.query(`
                         SELECT COALESCE(MAX(ID_PAGOREFGENS),0)
                         FROM sera.COMER_PAGOSREFGENS
                         WHERE ID_EVENTO = $1
                        `, [pIdevento]);

                  idPayRefGens = result1[0].coalesce;
            } catch (error) {
                  idPayRefGens = 0;
            }

            try {
                  const result2 = await this.eatEventRepository.query(`
                        SELECT 1 + TO_NUMBER(VALOR)/100, TO_NUMBER(VALOR)
                        FROM sera.comer_parametrosmod PAR
                        WHERE PAR.PARAMETRO = 'IVA'
                        AND PAR.DIRECCION = 'C' `);

                  porcIva = result2[0].to_number;
                  taxIva = result2[0].to_number_1;
            } catch (error) {
                  porcIva = 1.16;
                  taxIva = 16;
            }

            cuAmountsVentas = await this.cuMontsVents(pIdevento, pCveejec);
            console.log(cuAmountsVentas);

            const value = await this.eatEventRepository
                  .createQueryBuilder()
                  .select("UPPER(valor)", "c_CONIVA")
                  .from("sera.comer_parametrosmod", "par")
                  .where("par.PARAMETRO = :parameter", { parameter: "CHCONIVA" })
                  .getRawOne();
            console.log(value);
            //plsql 1389
            console.log([1, 3].includes(pCveejec));
            if ([1, 3].includes(pCveejec)) {
                  console.log("here", pIdevento);
                  console.log(await this.paDismueblesDe1(pIdevento));
                  for (const reMountsVenta of cuAmountsVentas) {
                        const result = await this.eatEventRepository
                              .query(`SELECT COALESCE(SUM(MONTO),0) AS montoTotalPago
                              FROM sera.COMER_PAGOREF, sera.COMER_PARAMETROSMOD
                             WHERE ID_LOTE IN (SELECT ID_LOTE
                                                 FROM sera.COMER_LOTES
                                                WHERE ID_ESTATUSVTA = 'VEN'
                                                  AND ID_EVENTO = ${pIdevento}
                                                  AND ID_CLIENTE = ${reMountsVenta.idCliente}
                                                  AND LOTE_PUBLICO != 0)
                               AND SUBSTR(REFERENCIA,1,1) NOT IN ('2','3','4','7','6')
                               AND VALIDO_SISTEMA = 'A'
                               AND CVE_BANCO = PARAMETRO
                               AND DIRECCION = 'C'
                               AND IDORDENINGRESO IS NULL;` )


                        const amounTotPay = result[0].montototalpago;
                        const amounTotClien = reMountsVenta.anticipo;
                        let nOrdenLotes = 0;
                        let saldoPrecioFinal, saldoAnticipo,
                              saldoPrecioGarantia, saldoMontoLiq,
                              saldoGarantiaAsig, noTransferente,
                              montoPrecioGarantia, tabLotes;
                        let saldoLote = {
                              idLote: 0,
                              saldoPrecioFinal: 0,
                              saldoAnticipo: 0,
                              saldoPrecioGarantia: 0,
                              saldoMontoLiq: 0,
                              saldoGarantiaAsig: 0,
                              saldo_garantia_asig: 0,
                              ind_pena: '',
                              noTransferente: 0,
                              montoPrecioGarantia: 0,
                              tabLotes: 0,
                              lote: 0,
                        }
                        let ArrSaldolote = [];
                        let c_DIRECCION = "M"; // Borrar es con fines de prueba mientras valido de donde optener el valor

                        for (const reMontosLotes of cuAmountsLots) {

                              saldoLote.saldoPrecioFinal = reMontosLotes.preciofinal;
                              saldoLote.saldoAnticipo = reMontosLotes.anticipo;
                              saldoLote.saldoPrecioGarantia = reMontosLotes.c``;
                              saldoLote.saldoMontoLiq = reMontosLotes.montoliq;
                              saldoLote.saldoGarantiaAsig = reMontosLotes.garantiaasig;
                              saldoLote.noTransferente = reMontosLotes.notransferente;
                              saldoLote.montoPrecioGarantia = 0;
                              saldoLote.tabLotes = reMontosLotes.idLote;

                              if (pIdevento == 4 && c_DIRECCION == 'M') {
                                    saldoLote.montoPrecioGarantia = Math.round(reMontosLotes.preciofinal * 5.2);
                              } else {
                                    saldoLote.montoPrecioGarantia = reMontosLotes.preciogarantia;
                              }

                              nOrdenLotes++;
                              ArrSaldolote.push(saldoLote);

                        }

                        let MontsPagoRef = await this.cuMontsPagoRef(pIdevento, reMountsVenta.idCliente);
                        console.log("array", MontsPagoRef);



                        ///Jorge Colaborador
                        let nMonto = 0; //n_MONTO
                        let lBan = false;
                        let nTlote = 0;
                        if(nOrdenLotes > 0){
                              for(var i = 1; i <= nOrdenLotes; i++){
                                    nTlote = ArrSaldolote[i].tabLotes;
                                    if(nMonto == 0){
                                          
                                          lBan = true;
                                          for (const montPr of MontsPagoRef) {
                                                if(pIndFinal == 2){

                                                      ////REVISAR ESTO ES UN CABO SUELTO
                                                      await this.eatEventRepository.query(`
                                                            UPDATE sera.COMER_PAGOREF
                                                            SET VALIDO_SISTEMA = 'S'
                                                            WHERE  OF cu_MONTOS_PAGOREF
                                                      `);
                                                }
                                          }

                                          lBan = false;
                                    }

                                    if(nMonto >= ArrSaldolote[nTlote].saldoAnticipo){
                                          idPayRefGens = idPayRefGens + 1; //n_ID_PAGOREFGENS
                                          cError = 'Pago Garantías: ';

                                          if(pIdevento == 5 && value == 'N'){
                                                for (const montPr of MontsPagoRef) {
                                                      await this.paDismuebleIns(
                                                            idPayRefGens, 
                                                            montPr.ID_PAGO, 
                                                            nTlote, 
                                                            nMonto, 
                                                            montPr.REFERENCIAORI, 
                                                            null, 
                                                            ArrSaldolote[nTlote].noTransferente, 
                                                            0, 
                                                            0, 
                                                            nMonto, 
                                                            'N', 
                                                            pIdevento, 
                                                            new Date(), 
                                                            0, 
                                                            cError
                                                      );
                                                }
                                          }else{

                                          }


                                    }


                              }
                        }




                  }

            }

      }

}
