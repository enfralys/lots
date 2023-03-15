import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EatStatusXScreenController } from './controllers/eat-status-x-screen.controller';
import { StatusXScreenEntity } from '../infrastructure/eat-state-x-screen.entity';
import { EatStatusXScreenService } from './services/eat-status-x-screen.service';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { EatEventEntity } from '../infrastructure/eat.event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatusXScreenEntity, EatEventEntity])],
  controllers: [EatStatusXScreenController],
  providers: [EatStatusXScreenService, CommonFilterService],
})
export class EatStatusXScreenModule {}
