import type { IAuthApi } from "./interfaces";
export default class AuthApi implements IAuthApi {
    private apibase;
    private onLogin;
    constructor(apibase?: string, onLogin?: Function | null);
    get(): Promise<any>;
    login(login: string, password: string): Promise<any>;
    logout(): Promise<any>;
}
//# sourceMappingURL=auth-api.d.ts.map