import handleFetch from "./handle-fetch";
import user from "./user";
export default class AuthApi {
    constructor(apibase = "/gold/auth", onLogin = null) {
        this.apibase = apibase;
        this.onLogin = onLogin;
    }
    get() {
        return fetch(this.apibase + '/get', { method: "POST" }).then(handleFetch).then(res => {
            user.update((user) => {
                if (user === null && res !== null && this.onLogin !== null)
                    this.onLogin();
                return res;
            });
        });
    }
    login(login, password) {
        return fetch(this.apibase + '/login', { method: "POST", body: JSON.stringify({ login, password }) }).then(handleFetch).then(res => this.get());
    }
    logout() {
        return fetch(this.apibase + '/logout', { method: "POST" }).then(handleFetch).then(res => this.get());
    }
}
//# sourceMappingURL=auth-api.js.map