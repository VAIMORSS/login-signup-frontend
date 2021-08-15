import { UserType } from '../../types/user';
import { ApiType } from '../../types/api';


export default class User implements UserType {
    constructor(apiInstance: ApiType, endpoint: string) {
        this.api = apiInstance;
        this.url = this.api.baseUrl + endpoint;
    }

    /**Props ************************/
    jwt = "";
    api: ApiType;
    url = "";

    /**Methods ************************/
    async getUsers() {
        try {
            const response = await this.api.get(this.url);
            return response;
        } catch (e) {
            return { error: e };
        }
    }
}
