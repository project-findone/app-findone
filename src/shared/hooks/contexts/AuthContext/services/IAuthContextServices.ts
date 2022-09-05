export type TSignInCredentials = {
    email: string;
    password: string;  
}

export type TSignUpCredentials = {
    email: string;
    password: string;

}

export interface IAuthContextServices {
    signIn(credentials: TSignInCredentials): Promise<void>;
    signUp(credentials: TSignUpCredentials): Promise<void>;
}