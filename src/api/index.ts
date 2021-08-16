import { MainType } from '../types';
import Api from './routes/api';
import User from './routes/user';
import Auth from './routes/auth';

export enum endpoints {
    users = "/users",
    auth = "/authentication",
}


export default class Main implements MainType {
    api = new Api('https://myeffect-bk.herokuapp.com/api/v1/');
    user = new User(this.api, endpoints.users);
    auth = new Auth(this.api, endpoints.auth)
}
