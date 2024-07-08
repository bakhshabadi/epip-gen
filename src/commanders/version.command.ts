import { Command, CommandRunner } from 'nest-commander'
import * as pkg from '../../package.json'

@Command({ name: 'version', description: 'get version' })
export class VersionCommander implements CommandRunner {
  constructor() {}

  async run(passedParam: string[]): Promise<void> {
    console.log(pkg.version)
  }
}
