import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmpLotsEatController } from './controllers/tmp-lots-eat.controller';
import { TmpLotsEatEntity } from '../infrastructure/tmp-lots-eat.entity';
import { TmpLotsEatService } from './services/tmp-lots-eat.service';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { EatEventEntity } from '../infrastructure/eat.event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TmpLotsEatEntity, EatEventEntity])],
  controllers: [TmpLotsEatController],
  providers: [TmpLotsEatService, CommonFilterService],
})
export class TmpLotsEatModule {}
