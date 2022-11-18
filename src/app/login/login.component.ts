import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: FormGroup | any;
  constructor(private _http: HttpClient, private _route: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login: FormGroup) {
    // console.log(this.login.value);
    this._http.get<any>("http://localhost:8080/signup")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.fname === this.login.value.fname && a.password === this.login.value.password
        });

        if (user) {
          alert('YAHOO You are successfully logged In');
          // this.login.reset();
          localStorage.setItem('userId', user.id)
          localStorage.setItem('userName', user.fname)
          // $('.form-box').css('display','none');
          this._route.navigate(['dashboard']);
        } else {
          alert('KIndly Fill Below Details');
          this._route.navigate(['login']);
        }
      }, err => {
        alert('KIndly Fill Below Details');
      })





  }



  sbtn1() {

    // $('.form-box').css('display','none');

    // $('.form-box1').css('display','block');

  }



}