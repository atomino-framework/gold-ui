import handleFetch from "./handle-fetch";
import type {IAuthApi} from "./interfaces";
import user from "./user";

export default class AuthApi implements IAuthApi {

	constructor(private apibase: string = "/gold/auth", private onLogin: Function | null = null) {}

	get(): Promise<any> {
		return fetch(this.apibase + '/get', {method: "POST"}).then(handleFetch).then(res => {
			user.set(res);
			return res;
		});
	}

	login(login: string, password: string): Promise<any> {
		return fetch(this.apibase + '/login', {method: "POST", body: JSON.stringify({login, password})}).then(handleFetch).then(res => {
			if (null !== this.get() && this.onLogin !== null) this.onLogin();
		});
	}

	logout(): Promise<any> {
		return fetch(this.apibase + '/logout', {method: "POST"}).then(handleFetch).then(res => this.get());
	}

}
