import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiProvider} from '../libraries/api';

@Injectable()
export class UserService {

    constructor(private api: ApiProvider) { }

    getAll() {
        return this.api.get('users');
    }

    getById(id: number) {
        return this.api.get(`users/${id}`);
    }

    create(user: any): Observable<any> {
        return this.api.post(`register/${user}`, user);
    }

    update(user: User) {
        return this.api.raw('updateua', 'PUT', user);
    }

    delete(id: number) {
        return this.api.delete(`users/${id}`);
    }

    validateAddress() {
        return this.api.get('validateAddress');
    }

}
