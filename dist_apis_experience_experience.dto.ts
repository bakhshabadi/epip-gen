import { v1EmploymentType } from "../models";

import { v1Date } from "../models";import { protobufAny } from "../models";import { v1EmploymentType } from "../models";

import { v1Date } from "../models";

export class v1CreateExperienceRequest {
    constructor(
        public title: string,
		public employmentType: v1EmploymentType,
		public companyName: string,
		public description: string,
		public startDate: v1Date,
		public endDate: v1Date,
    ) { }
}

export class CreateExperienceDtoOut {
    constructor(

    ){}
}

export class rpcStatus {
    constructor(
        public code: number,
		public message: string,
		public details: protobufAny[],
    ) { }
}

export class v1Experience {
    constructor(
        public id: string,
		public profileId: string,
		public title: string,
		public employmentType: v1EmploymentType,
		public companyName: string,
		public description: string,
		public startDate: v1Date,
		public endDate: v1Date,
    ) { }
}

export class DeleteExperienceDtoOut {
    constructor(

    ){}
}

export class UpdateExperienceDtoOut {
    constructor(

    ){}
}

