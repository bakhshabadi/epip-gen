import { Injectable } from "@nestjs/common";
import { Command, CommandRunner, Option } from "nest-commander";
import { FrameworkType } from "./gen.model";
import { GenService } from "./gen.service";

@Command({ name: 'gen', description: 'fetch api schema for angular/vuejs' })
export class GenCommander implements CommandRunner {
    constructor(private srv: GenService) { }

    async run(
        passedParam: string[],
    ): Promise<void> {
        await this.srv.run();
    }

    @Option({
        flags: '-t, --type [string]',
        description: '\n\tng: angular(master of the framework)\n\tvue:vueJs(shit framework)\n\treact(worst framework)',
    })
    getType(type: string): void {
        this.srv.type = type as FrameworkType;
        if (!Object.values(FrameworkType).includes(type as FrameworkType)) {
            console.error("not support your framework");
        }
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
}