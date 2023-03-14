import { Module } from '@nestjs/common';
import { EatLotsModule } from './eat-lots/eat-lots.module';
import { ApplicationModule } from './application/application.module';
import { TmpLotsEatModule } from './tpm-lots-eat/tmp-lots-eat.module';

@Module({
  imports: [EatLotsModule, ApplicationModule, TmpLotsEatModule],
})
export class LotsQueryModule {}
