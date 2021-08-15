import { ApiType, responseType } from '../../types/api';
import Axios from 'axios';
import { LOG_OUT } from '../../redux';
import { store } from './../../App'

async function jwtCheck(e: any) {
    const state = store.getState();
    if (state.auth.isLoggedIn && (JSON.stringify(e).includes("401"))) {
        store.dispatch({ type: LOG_OUT })
    }
}

export default class Api implements ApiType {
    baseUrl = "http://localhost:4000";

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get(url: string) {
        try {
            const response = await Axios.get(url);
            const error = this.extractError(response);
            return { data: response.data, error: error };
        } catch (e) {
            jwtCheck(e);
            return { error: e };
        }
    }

    extractError(response: responseType) {
        if (response.error) {
            return response.error;
        }
        return null;
    }

    async post(url: string, payload: any) {
        try {
            const response = await Axios.post(url, payload);
            const error = this.extractError(response);
            return { data: response.data, error: error };
        } catch (e) {
            jwtCheck(e);
            return { error: e };
        }
    }
}




export enum endpoints {
    users = '/users',
}


