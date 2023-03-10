import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EatLotsController } from './controllers/eat-lots.controller';
import { EatLotsEntity } from '../infrastructure/eat-lots.entity';
import { EatLotsService } from './services/eat-lots.service';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { EatEventEntity } from '../infrastructure/eat.event.entity';
import { EatPayefEntity } from '../infrastructure/eat-payef.entity';
import { StatusXScreenEntity } from '../infrastructure/eat-state-x-screen.entity';
import { EatParametersForLotEntity } from '../infrastructure/eat-parametersforlot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EatLotsEntity, EatEventEntity])],
  controllers: [EatLotsController],
  providers: [EatLotsService, CommonFilterService],
})
export class EatLotsModule {}
