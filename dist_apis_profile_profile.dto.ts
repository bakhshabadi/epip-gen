import { v1Industry } from "../models";

import { v1PaginatedListResponse } from "../models";import { protobufAny } from "../models";import { v1PublicKey } from "../models";

import { v1File } from "../models";

import { v1ProfileAccountPreferences } from "../models";

import { v1ProfileContactInfo } from "../models";

import { v1Experience } from "../models";

import { v1Education } from "../models";import { v1UpdateAccountPreferences } from "../models";

import { v1ProfileContactInfo } from "../models";import { v1File } from "../models";import { v1File } from "../models";

export class ListIndustryQueryDtoIn {
    constructor(
    filters: undefined,
    sort: undefined,
    pageNo: undefined,
    pageSize: undefined,
    ){}
}

export class v1ListIndustryResponse {
    constructor(
        public data: v1Industry[],
		public response: v1PaginatedListResponse,
    ) { }
}

export class rpcStatus {
    constructor(
        public code: number,
		public message: string,
		public details: protobufAny[],
    ) { }
}

export class v1Profile {
    constructor(
        public id: string,
		public publicKeys: v1PublicKey[],
		public username: string,
		public avatar: v1File,
		public cover: v1File,
		public profileTransactionHash: string,
		public accountPreferences: v1ProfileAccountPreferences,
		public contactInfo: v1ProfileContactInfo,
		public aboutMe: string,
		public experiences: v1Experience[],
		public educations: v1Education[],
		public createdAt: string,
		public updatedAt: string,
    ) { }
}

export class v1UpdateProfileRequest {
    constructor(
        public profileTransactionHash: string,
		public accountPreferences: v1UpdateAccountPreferences,
		public contactInfo: v1ProfileContactInfo,
		public aboutMe: string,
    ) { }
}

export class UpdateProfileDtoOut {
    constructor(

    ){}
}

export class DeleteAvatarDtoOut {
    constructor(

    ){}
}

export class v1UpdateAvatarRequest {
    constructor(
        public avatar: v1File,
    ) { }
}

export class UpdateAvatarDtoOut {
    constructor(

    ){}
}

export class DeleteCoverDtoOut {
    constructor(

    ){}
}

export class v1UpdateCoverRequest {
    constructor(
        public cover: v1File,
    ) { }
}

export class UpdateCoverDtoOut {
    constructor(

    ){}
}

export class v1UpdateUsernameRequest {
    constructor(
        public username: string,
    ) { }
}

export class UpdateUsernameDtoOut {
    constructor(

    ){}
}

