import { Command, CommandRunner, Option } from "nest-commander";
import { ReactGenService } from "../services/react-gen.service";

@Command({ name: 'react', description: 'fetch api schema for react' })
export class ReactGenCommander implements CommandRunner {
    constructor(private srv: ReactGenService) { }

    async run(
        passedParam: string[],
    ): Promise<void> {
        await this.srv.run();
    }

    @Option({
        flags: '-o, --output [string]',
        description: 'output path',
    })
    getPath(output: string): void {
        this.srv.output = output;
    }

    @Option({
        flags: '-h, --host [string]',
        description: 'the url address has contain the file swagger.json',
    })
    getSwaggerAddress(swgAddress: string): void {
        this.srv.swgAddress = swgAddress;
    } 

    @Option({
        flags: '-t, --host [string]',
        description: 'the url address has contain the file swagger.json',
    })
    getTags(tags: string): void {
        // this.srv.swgAddress = swgAddress;
    } 

    @Option({
        flags: '-e, --env [string]',
        description: 'environment key for baseUrl. defaule url is swagger\'s route',
    })
    getEnvironment(env: string): void {
        this.srv.environment = env;
    } 
}