import { Command, CommandRunner, Option } from "nest-commander";
import { VueGenService } from "../services/vue-gen.service";

@Command({ name: 'vue', description: 'fetch api schema for vuejs' })
export class VueGenCommander implements CommandRunner {
    constructor(private srv: VueGenService) { }

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
        flags: '-s, --step [string]',
        description: 'step path',
    })
    getStepPath(output: string): void {
        this.srv.splitPath = +output;
    }

    @Option({
        flags: '-h, --host [string]',
        description: 'the url address has contain the file swagger.json',
    })
    getSwaggerAddress(swgAddress: string): void {
        this.srv.swgAddress = swgAddress;
    }

    @Option({
        flags: '-t, --tags [string]',
        description: 'default is all tags',
    })
    getTags(tags: string): void {
        this.srv.tags = tags.split(",");
    }

    @Option({
        flags: '-ti, --timeout [string]',
        description: 'timeout is 20000',
    })
    getTimeout(times: string): void {
        this.srv.timeout = +times;
    }

    @Option({
        flags: '-e, --env [string]',
        description: 'environment key for baseUrl. defaule url is swagger\'s route',
    })
    getEnvironment(env: string): void {
        this.srv.environment = env;
    }

    @Option({
        flags: '-p, --plugin [string]',
        description: 'environment key for baseUrl. defaule url is swagger\'s route',
    })
    getPlugin(plugin: string): void {
        this.srv.plugin = plugin;
    }

    @Option({
        flags: '-in, --interceptor path [string]',
        description: 'interceptor path.',
    })
    getInterceptorPath(env: string): void {
        this.srv.interceptorPath = env;
    }

    @Option({
        flags: '-v, --version',
        description: 'app version',
    })
    getVersion(): void {
        console.log(process.version)
        process.exit()
    }
}