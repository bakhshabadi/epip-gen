import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Commanders from '../commanders';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [
    Commanders.GenCommander,
    Commanders.GenService,
  ],
})
export class AppModule {}
