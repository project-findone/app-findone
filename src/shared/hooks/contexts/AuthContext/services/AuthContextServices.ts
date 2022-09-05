import { IAuthContextServices, TSignInCredentials, TSignUpCredentials } from "./IAuthContextServices";

export class AuthContextServices implements IAuthContextServices{

    async signIn(credentials: TSignInCredentials): Promise<void> {
    }

    async signUp(credentials: TSignUpCredentials): Promise<void> {
        
    }
   
}
