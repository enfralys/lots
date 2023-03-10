import { Module } from '@nestjs/common';
import { EatLotsModule } from './eat-lots/eat-lots.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [EatLotsModule, ApplicationModule],
})
export class LotsQueryModule {}
