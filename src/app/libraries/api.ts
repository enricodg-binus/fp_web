import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class ApiProvider {
    API_URL = 'https://api.enricodg.me/api';
    private headerInjection: any;
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private http: HttpClient,
                private router: Router) {}

    private bindHeaderInjection() {
        this.headerInjection = {};
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('token')) {
                this.headerInjection['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                this.headerInjection['Accept'] = 'application/json';
            }
        }
    }

    private getUrl(path: any) {
        return `${this.API_URL}/${path}`;
    }

    private extractData(res: Response) {
        return res || {};
    }

    private handleError(res: Response) {
        const body = res || {};

        return Observable.throw(body);
    }

    private checkAuthorization() {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('token')) {
                const check = this.http.get(this.getUrl('me'), {headers: this.headerInjection})
                    .map(this.extractData)
                    .catch(this.handleError);

                check.subscribe(
                    success => {
                    },
                    err => {
                        if (err.status === 401) {
                            localStorage.clear();
                            this.router.navigate(['/']);
                        } else {
                            localStorage.clear();
                            window.location.href = '/';
                        }
                    }
                );
            }
        }
    }

    public raw(path: any, method: string, params?: any): Observable<any> {
        switch (method) {
            case 'GET':
                return this.http.get(this.getUrl(path), {headers: this.headerInjection, params: params}).map(this.extractData).catch(this.handleError);
            case 'POST':
                return this.http.post(this.getUrl(path), {params: params}, {headers: this.headerInjection}).map(this.extractData).catch(this.handleError);
            case 'PUT':
                return this.http.put(this.getUrl(path), {params: params}, {headers: this.headerInjection}).map(this.extractData).catch(this.handleError);
        }
    }

    public get(path: any) {
        this.bindHeaderInjection();
        this.checkAuthorization();
        return this.http.get(this.getUrl(path), {headers: this.headerInjection})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getLink(path: any) {
        this.bindHeaderInjection();
        this.checkAuthorization();

        return this.http.get(path, {headers: this.headerInjection})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public post(path: any, params: any, upload?: boolean) {
        this.bindHeaderInjection();
        this.checkAuthorization();

        let body: any;

        if (upload) {
            body = new FormData();
            for (const key in params) {
                body.append(key, params[key]);
            }
        } else {
            body = JSON.parse(JSON.stringify(params));
        }

        return this.http.post(this.getUrl(path), body, {headers: this.headerInjection})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public put(path: any, params: any) {
        this.bindHeaderInjection();
        this.checkAuthorization();

        let body: any;

        body = JSON.parse(JSON.stringify(params));

        return this.http.put(this.getUrl(path), body, {headers: this.headerInjection})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public delete(path: any) {
        this.bindHeaderInjection();
        this.checkAuthorization();

        return this.http.delete(this.getUrl(path), { headers: this.headerInjection })
            .map(this.extractData)
            .catch(this.handleError);
    }
}
