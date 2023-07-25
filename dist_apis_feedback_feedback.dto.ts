import { protobufAny } from "../models";import { v1FeedbackTarget } from "../models";

export class v1CreateContactUsRequest {
    constructor(
        public name: string,
		public email: string,
		public message: string,
    ) { }
}

export class CreateContactUsDtoOut {
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

export class v1CreateFeedbackRequest {
    constructor(
        public name: string,
		public email: string,
		public message: string,
		public rate: number,
		public target: v1FeedbackTarget,
    ) { }
}

export class CreateFeedbackDtoOut {
    constructor(

    ){}
}

