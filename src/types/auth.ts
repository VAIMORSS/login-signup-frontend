import { ApiType, responseType } from './api';


export interface AuthType {
    api: ApiType;
    jwt: string;
    url: string;

    getJwtToken: (payload: any) => Promise<responseType>;
    registerUser: (payload: any) => Promise<responseType>;
}

export interface authObj {
    strategy: string;
    email: string;
    password: string;
}

export interface authStoreType {
    jwt: string | null;
    signUpLoading: boolean;
    logInLoading: boolean;
    error: any;
    isLoggedIn: boolean;
}