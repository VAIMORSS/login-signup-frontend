import { ApiType, responseType } from './api';


export interface UserType {
    //props
    api: ApiType;
    jwt: string;
    url: string;
    // authenticate
    getUsers: () => Promise<responseType>;
}

export interface name {
    firstName: string;
    lastName: string;
}

export interface User {
    email: string;
    name: string;
    birthday: string;
}

export interface userStoreType {
    users: User[];
    isLoading: boolean;
    error: any;
}