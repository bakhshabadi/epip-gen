import { v1File } from "../models";

import { v1IPAvailability } from "../models";

import { v1IPNetwork } from "../models";import { v1File } from "../models";

import { v1IPAvailability } from "../models";

import { v1IPNetwork } from "../models";import { protobufAny } from "../models";import { v1IP } from "../models";

import { v1PaginatedListResponse } from "../models";import { v1File } from "../models";

import { v1IP } from "../models";import { v1IP } from "../models";

import { v1PaginatedListResponse } from "../models";

export class v1CreateIPRequest {
    constructor(
        public name: string,
		public file: v1File,
		public metadataTransactionHash: string,
		public mintId: string,
		public owners: string[],
		public inventors: string[],
		public affiliations: string[],
		public worldApplicationNumber: string[],
		public tokenId: string,
		public availability: v1IPAvailability,
		public description: string,
		public network: v1IPNetwork,
		public contractAddress: string,
		public patentNumber: string,
		public invNumber: string,
		public innovationStandard: string,
		public awards: string,
		public pctNumber: string,
    ) { }
}

export class v1IP {
    constructor(
        public id: string,
		public profileId: string,
		public shortId: string,
		public name: string,
		public file: v1File,
		public metadataTransactionHash: string,
		public mintId: string,
		public owners: string[],
		public inventors: string[],
		public affiliations: string[],
		public worldApplicationNumber: string[],
		public tokenId: string,
		public availability: v1IPAvailability,
		public description: string,
		public network: v1IPNetwork,
		public contractAddress: string,
		public patentNumber: string,
		public invNumber: string,
		public innovationStandard: string,
		public awards: string,
		public pctNumber: string,
		public createdAt: string,
    ) { }
}

export class rpcStatus {
    constructor(
        public code: number,
		public message: string,
		public details: protobufAny[],
    ) { }
}

export class ListAccountIPQueryDtoIn {
    constructor(
    filters: undefined,
    sort: undefined,
    pageNo: undefined,
    pageSize: undefined,
    ){}
}

export class v1ListAccountIPResponse {
    constructor(
        public data: v1IP[],
		public response: v1PaginatedListResponse,
    ) { }
}

export class v1GetIPResponse {
    constructor(
        public publicKey: string,
		public username: string,
		public avatar: v1File,
		public ip: v1IP,
    ) { }
}

export class ListIPQueryDtoIn {
    constructor(
    paginated.filters: undefined,
    paginated.sort: undefined,
    paginated.pageNo: undefined,
    paginated.pageSize: undefined,
    ){}
}

export class v1ListIPResponse {
    constructor(
        public data: v1IP[],
		public response: v1PaginatedListResponse,
    ) { }
}

