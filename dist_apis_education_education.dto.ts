import { v1Date } from "../models";import { protobufAny } from "../models";import { v1Date } from "../models";

export class v1CreateEducationRequest {
    constructor(
        public school: string,
		public degree: string,
		public fieldOfStudy: string,
		public description: string,
		public startDate: v1Date,
		public endDate: v1Date,
    ) { }
}

export class CreateEducationDtoOut {
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

export class v1Education {
    constructor(
        public id: string,
		public profileId: string,
		public school: string,
		public degree: string,
		public fieldOfStudy: string,
		public description: string,
		public startDate: v1Date,
		public endDate: v1Date,
    ) { }
}

export class DeleteEducationDtoOut {
    constructor(

    ){}
}

export class UpdateEducationDtoOut {
    constructor(

    ){}
}

