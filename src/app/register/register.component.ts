import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {};

  constructor(private _authService: AuthService, private _router: Router ) { }

  ngOnInit(): void {
  }

  registerUser(){
    // console.log(this.registerUserData)
    this._authService.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/todoList'])
      },
      err => console.log(err)
    )
  }

}