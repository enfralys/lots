import { Module } from '@nestjs/common';
import { EatLotsModule } from './eat-lots/eat-lots.module';
import { ApplicationModule } from './application/application.module';
import { TmpLotsEatModule } from './tpm-lots-eat/tmp-lots-eat.module';
import { EatStatusXScreenModule } from './eat-state-x-screen/eat-status-x-screen.module';

@Module({
  imports: [
    EatLotsModule,
    ApplicationModule,
    TmpLotsEatModule,
    EatStatusXScreenModule
  ],
})
export class LotsQueryModule { }
