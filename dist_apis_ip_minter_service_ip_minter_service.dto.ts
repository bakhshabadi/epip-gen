import { v1IPSearchResult } from "../models";

import { v1ProfileSearchResult } from "../models";import { protobufAny } from "../models";

export class SearchQueryDtoIn {
    constructor(
    q: undefined,
    pageSize: undefined,
    pageNo: undefined,
    ){}
}

export class v1SearchResponse {
    constructor(
        public ips: v1IPSearchResult[],
		public profiles: v1ProfileSearchResult[],
		public pageSize: number,
		public pageNo: number,
		public totalItemsCountIp: number,
		public totalItemsCountProfile: number,
    ) { }
}

export class rpcStatus {
    constructor(
        public code: number,
		public message: string,
		public details: protobufAny[],
    ) { }
}

