import { protobufAny } from "../models";

export class v1GenerateAccessTokenRequest {
    constructor(
        public refreshToken: string,
    ) { }
}

export class v1LoginResponse {
    constructor(
        public userId: string,
		public accessToken: string,
		public refreshToken: string,
		public accessTokenExpiration: string,
    ) { }
}

export class rpcStatus {
    constructor(
        public code: number,
		public message: string,
		public details: protobufAny[],
    ) { }
}

export class v1ForgotPasswordRequest {
    constructor(
        public email: string,
    ) { }
}

export class ForgotPasswordDtoOut {
    constructor(

    ){}
}

export class v1LoginRequest {
    constructor(
        public email: string,
		public username: string,
		public password: string,
    ) { }
}

export class v1LoginByWalletRequest {
    constructor(
        public title: string,
		public publicKey: string,
    ) { }
}

export class LoginByWalletMessageQueryDtoIn {
    constructor(
    title: undefined,
    ){}
}

export class v1LoginByWalletMessageResponse {
    constructor(
        public message: string,
    ) { }
}

export class v1ResendOTPRequest {
    constructor(
        public email: string,
		public mobile: string,
    ) { }
}

export class ResendOTPDtoOut {
    constructor(

    ){}
}

export class v1RegisterRequest {
    constructor(
        public name: string,
		public email: string,
		public password: string,
    ) { }
}

export class RegisterDtoOut {
    constructor(

    ){}
}

export class VerifyEmailQueryDtoIn {
    constructor(
    email: undefined,
    code: undefined,
    ){}
}

export class ConnectWalletQueryDtoIn {
    constructor(
    title: undefined,
    ){}
}

export class ConnectWalletDtoOut {
    constructor(

    ){}
}

