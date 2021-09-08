export interface IEmail {
    email: string;
}

export interface IUserId {
    userId: string;
}

export interface IIdString {
    id: string;
}

export interface IIdNumber {
    id: number;
}

export class Email implements IEmail {
    email: string = '';
}

export class UserId implements IUserId {
    userId: string = '';
}

export class IdString implements IIdString {
    id: string = '';

    constructor(id:string) {
        this.id = id
    }
}

export class IdNumber implements IIdNumber {
    id: number;

    constructor(id:number) {
        this.id = id
    }
}
