import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      })
    };

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: any): Observable<any> {
        return this.http.post('http://localhost:8000/api/register', user)
          .map( res => {
            return res;
          })
          .catch( err => {
            return Observable.throw(err);
          });
    }

    update(user: User) {
        return this.http.put('http://localhost:8000/api/updateua/', user, this.httpOptions);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

}
