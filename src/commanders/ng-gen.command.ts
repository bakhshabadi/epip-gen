import { Injectable } from "@nestjs/common";
import { Command, CommandRunner, Option } from "nest-commander";
import { NgGenService } from "../services/ang-gen.service";

@Command({ name: 'ng', description: 'fetch api schema for angular(rxjs)' })
export class NgGenCommander implements CommandRunner {
    constructor(private srv: NgGenService) { }

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
}