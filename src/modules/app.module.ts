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
    Commanders.ReactGenCommander,
    Services.NgGenService,
    Services.VueGenService,
    Services.ReactGenService,
  ],
})
export class AppModule {}
