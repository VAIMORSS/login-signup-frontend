import { ApiType } from './api';
import { AuthType } from './auth';
import { UserType } from './user';

export interface MainType {
    api: ApiType;
    user: UserType;
    auth: AuthType;
}

export * from './api';
export * from './auth';
export * from './user';
