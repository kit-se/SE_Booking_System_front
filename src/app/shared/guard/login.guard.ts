import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate (next: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return sessionStorage.getItem('id') !== null;
    }
}
