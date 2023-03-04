import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Commanders from '../commanders';
import * as Services from '../services';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [
    Commanders.NgGenCommander,
    Commanders.VueGenCommander,
    Services.NgGenService,
    Services.VueGenService,
  ],
})
export class AppModule {}
