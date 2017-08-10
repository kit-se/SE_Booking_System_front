import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate (next: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if ( sessionStorage.getItem('id') === null ) {
            alert('로그인 후 이용할 수 있습니다.');
        }
        return sessionStorage.getItem('id') !== null;
    }
}
