import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class  UserGuard implements  CanActivate, CanActivateChild {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

    guard() {
        if (isPlatformBrowser(this.platformId)) {
            if (!localStorage.getItem('token')) {
                localStorage.clear();
                this.router.navigate(['/']);
            }
        }

        return true;
    }

    canActivate() {
        return this.guard();
    }

    canActivateChild() {
        return this.guard();
    }
}