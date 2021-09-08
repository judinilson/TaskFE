export interface IRegister {
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    email: string;
    password: string;
    inviteId: number;
    role: string;
}

export class Register implements IRegister {
    firstName: string = '';
    lastName: string = '';
    userName: string = '';
    phoneNumber: string = '';
    email: string = '';
    password: string = '';
    role: string = '';
    inviteId: number = 0;
}
