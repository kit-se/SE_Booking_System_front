import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
    loginFormGroup: FormGroup;
    isLogin: boolean;
    id: number;

    constructor (private loginService: LoginService, private fb: FormBuilder) {
    }

    ngOnInit () {
        this.id = +sessionStorage.getItem('id');
        this.id ? this.isLogin = true : this.isLogin = false;


        this.loginFormGroup = this.fb.group({
            id: [ '', Validators.required ],
            password: [ '', Validators.required ]
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
                        this.isLogin = true;
                        this.id = value.id;
                    } else {
                        alert(`아이디 혹은 비밀번호가 틀렸습니다.`);
                    }
                },
                (error: any) => {
                    alert(error);
                }
            );
        } else {
            if ( form.get('id').invalid ) {
                alert('아이디를 입력해 주세요');
            } else if ( form.get('password').invalid ) {
                alert('비밀번호를 입력해 주세요');
            }
        }
    }
}
