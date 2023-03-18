import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationController } from './controllers/application/application.controller';
import { ApplicationService } from './services/application/application.service';
import { EatEventEntity } from '../infrastructure/eat.event.entity';
import { EatLotsEntity } from '../infrastructure/eat-lots.entity';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { EatParametersForLotEntity } from '../infrastructure/eat-parametersforlot.entity';
import { EatPayefEntity } from '../infrastructure/eat-payef.entity';
import { StatusXScreenEntity } from '../infrastructure/eat-state-x-screen.entity';
import { EstEstLotEntity } from '../infrastructure/eat-est-lot.entity';
import { EatClientEntity } from '../infrastructure/eat_client.entity';
import { EatGoodByLotEntity } from '../infrastructure/eat-goods-by-lot.entity';
import { EatTpEventEntity } from '../infrastructure/eat-tp-event.entity';
import { EatPagosRefgensEntity } from '../infrastructure/eat-payments-ref-gens';
import { EatDetLcEntity } from '../infrastructure/eat-det-lc.entity';
import { EatFactureEntity } from '../infrastructure/eat-facture.entity';
import { EatEventsTmpEntity } from '../infrastructure/eat-events-tmp.entity';
import { EatFactureElecEntity } from '../infrastructure/eat-facture-elec.entity';
import { EatClientByEventEntity } from '../infrastructure/eat-client-by-event.entity';
import { EatValpagCfdiEntity } from '../infrastructure/eat-valpag-cfdi.entity';
import { EstateEntity } from '../infrastructure/estate.entity';
import { EatRejectedGoodEntity } from '../infrastructure/eat-rejected-goods.entity';
import { EatParametersModEntity } from '../infrastructure/eat-parameters-mod.entity';
import { EatRefGarantiesEntity } from '../infrastructure/eat-ref-garanties.entity';
import { TmpLotsEatEntity } from '../infrastructure/tmp-lots-eat.entity';
import { EatLcEntity } from '../infrastructure/eat-lc.entity';
import { EatGoodsExelEntity } from '../infrastructure/eat-goods-excel.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CatStoreEntity } from '../infrastructure/cat-store.entity';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ms-sb-0001-appraise',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3010,
        },
      },
      {
        name: 'ms-sb-0001-event',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3014,
        },
      },
      {
        name: 'ms-sb-0001-captureline',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3012,
        },
      },
      {
        name: 'ms-sb-0001-realstate',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3000,
        },
      },
    ]),
    TypeOrmModule.forFeature([
      EatEventEntity,
      EatLotsEntity,
      EatParametersForLotEntity,
      EatPayefEntity,
      StatusXScreenEntity,
      EstEstLotEntity,
      EatClientEntity,
      EatGoodByLotEntity,
      EatTpEventEntity,
      EatPagosRefgensEntity,
      EatDetLcEntity,
      EatFactureEntity,
      EatEventsTmpEntity,
      EatFactureElecEntity,
      EatClientByEventEntity,
      EatValpagCfdiEntity,
      EstateEntity,
      EatLcEntity,
      EatRejectedGoodEntity,
      EatParametersModEntity,
      EatRefGarantiesEntity,
      TmpLotsEatEntity,
      EatGoodsExelEntity,
      CatStoreEntity
    ]),
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService, CommonFilterService],
})
export class ApplicationModule {}
