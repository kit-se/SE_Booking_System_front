import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';
import { LoginService } from '../../http/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    loginFormGroup: FormGroup;
    isLogin: boolean;
    isAdmin: boolean;
    id: string;

    constructor (private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    }

    ngOnInit () {
        sessionStorage.getItem('id') === null ? this.isLogin = false : this.isLogin = true;
        sessionStorage.getItem('isAdmin') === null ? this.isAdmin = false : this.isAdmin = sessionStorage.getItem('isAdmin') === 'true';
        if ( this.isLogin ) {
            this.id = sessionStorage.getItem('id');
        }
        this.loginFormGroup = this.fb.group({
            id: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public login (form: FormGroup) {
        const value = form.value;

        // form에 값 입력 체크
        if ( form.valid ) {
            this.loginService.login(value.id, value.password).subscribe(
                (res: any) => {
                    // 로그인 성공 체크
                    if ( res.result === 'login success' ) {
                        alert(`안녕하세요! ${value.id}님`);
                        sessionStorage.setItem('id', value.id);
                        sessionStorage.setItem('isAdmin', res.isAdmin);
                        this.isAdmin = res.isAdmin;
                        this.isLogin = true;
                        this.id = value.id;
                    } else {
                        if ( !isNullOrUndefined(res.suspect) ) {
                            alert(
                                `${res.suspect.booker}님은 ${res.suspect.booking_date} ${res.suspect.booking_time}시 이용 간 정리정돈 미실시 혹은 기물파손에 대한 신고가 접수되어 ${ moment(res.suspect.start_date).format('YYYY-MM-DD') }부터 ${ moment(res.suspect.end_date).format('YYYY-MM-DD') }까지 이용 정지 상태입니다.`);
                        } else {
                            alert(`아이디 혹은 비밀번호가 틀렸습니다.`);
                        }
                    }
                },
                (error: any) => {
                    alert(error.message);
                }
            );
        } else {
            if ( form.get('id').invalid ) {
                alert('아이디를 입력해 주세요');
            } else if ( form.get('password').invalid ) {
                alert('비밀번호를 입력해 주세요');
            }
        }

        this.loginFormGroup.reset();
    }

    public logout () {
        sessionStorage.clear();
        this.isLogin = false;
        this.isAdmin = false;
        this.router.navigate(['/main']);
    }
}
