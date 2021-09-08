export interface IJwtResponse{
    token:string | null;
    refreshToken:string | null;
    expire:Date | null;
    timeout:Date | null;
    userId:string;
    userName:string;
    imageUrl:string;
    role:string[];
}

export class JwtResponse implements IJwtResponse{
    imageUrl: string = '';
    userName: string = '';
    role: string[] = [];
    token: string | null = null;
    refreshToken: string = '';
    expire: Date | null = null;
    timeout: Date | null = null;
    userId: string = '';
}
