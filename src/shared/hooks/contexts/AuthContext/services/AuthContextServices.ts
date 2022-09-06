import type {IauthContextServices, TsignInCredentials, TsignUpCredentials} from './IAuthContextServices'

export class AuthContextServices implements IauthContextServices {
	async signIn(credentials: TsignInCredentials): Promise<void> {
	}

	async signUp(credentials: TsignUpCredentials): Promise<void> {
	}
}
