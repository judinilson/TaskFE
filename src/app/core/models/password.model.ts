export interface IForgotPassword {
    email: string,
    clientURI: string,
}

export interface IResetPassword {
    email: string,
    password: string,
    confirmPassword: string,
    token: string,
}

export class ForgotPassword implements IForgotPassword {
    email: string = "";
    clientURI: string = "";
}

export class ResetPassword implements IResetPassword {
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    token: string = '';
}
