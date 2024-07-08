#!/usr/bin/env node
import { CommandFactory } from 'nest-commander'
import { AppModule } from './modules/app.module'

async function bootstrap() {
  await CommandFactory.run(AppModule)
}
bootstrap()
