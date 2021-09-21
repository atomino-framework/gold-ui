import {IUser} from "./interfaces";
import handleFetch from "./handle-fetch";
import type {IAuthApi} from "./interfaces";
import user from "./user";

export default class AuthApi implements IAuthApi {

	constructor(private apibase: string = "/gold/auth", private onLogin: Function | null = null) {}

	get(): Promise<any> {
		return fetch(this.apibase + '/get', {method: "POST"}).then(handleFetch).then(res => {
			user.update((user:IUser|null)=>{
				if(user === null && res !== null && this.onLogin !== null) this.onLogin();
				return res;
			});
		});
	}

	login(login: string, password: string): Promise<any> {
		return fetch(this.apibase + '/login', {method: "POST", body: JSON.stringify({login, password})}).then(handleFetch).then(res =>this.get());
	}

	logout(): Promise<any> {
		return fetch(this.apibase + '/logout', {method: "POST"}).then(handleFetch).then(res => this.get());
	}

}
