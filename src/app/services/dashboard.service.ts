import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlertProviderService} from './alert.service';
import {ApiProvider} from '../libraries/api';

@Injectable()
export class DashboardProviderService {

  constructor(private api: ApiProvider) { }

  getUser(): Observable<any> {
    return this.api.get('me');
  }

  addAddress(name: string, phone: string, address: string) {
    return this.api.post('address', { name: name, phone: phone, address: address });
  }

  getUserAddress(): Observable<any> {
    return this.api.get('address');
  }

  deleteAddress(id: any) {
    return this.api.delete(`address/${id}`);
  }

}
