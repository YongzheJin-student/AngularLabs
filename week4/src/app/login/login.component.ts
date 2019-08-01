import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = ""
  password:string = ""
  correct ={email:"657647653@qq.com",password:"123"}

  constructor(private router:Router) { }

  ngOnInit() {
  }
  itemClick(){
    if (this.email == "657647653@qq.com" && this.password == "123"){
      this.router.navigateByUrl('/account/' + this.email)
    }
    else{
      alert("The username or password is not right")
    }
  }

}
