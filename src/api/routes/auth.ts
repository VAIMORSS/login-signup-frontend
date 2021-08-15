import { ApiType } from "../../types/api";
import { AuthType } from "../../types/auth";




export default class Auth implements AuthType {

    constructor(apiInstance: ApiType, endpoint: string) {
        this.api = apiInstance;
        this.url = this.api.baseUrl + endpoint;
    }

    /**Props */
    api: ApiType;
    jwt = "";
    url = "";

    /** Methods */
    async getJwtToken(payload: any) {
        const response = await this.api.post(`${this.url}/login/`, payload);
        return response;
    }

    async registerUser(payload: any) {
        const response = await this.api.post(`${this.url}/register/`, payload);
        return response;
    }

}