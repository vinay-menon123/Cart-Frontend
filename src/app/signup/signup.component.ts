import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  login:Login
  loginList:Login[] = [];
  id:number = 0;

  constructor(private loginService:LoginService, private router:Router){
    this.login = {
      id:0,
      username:"",
      passw:"",
      cart:[]
    }

  }

  getLogin(){
    this.loginService.getLogin().subscribe(data=>{
      this.loginList=data;
    })
  }

  checkCorrect(curr_login:Login){
    this.getLogin();
    console.log(this.loginList,"loginlist")
    for(let login of this.loginList){
      if(login.username==curr_login.username){
        return "exists"
      }
    }
    return "not-exist";
  }

  ngOnInit():void{
    this.getLogin();
  }

  onSubmit(){
    const res = this.checkCorrect(this.login);
    if(res=="exists"){
      alert("Username Exists!");
    }
    else if(res=="not-exist"){
      this.loginService.addLogin(this.login).subscribe(data=>{
        this.login = data;
        this.id = this.login.id;
        this.router.navigate(['cart-list',this.id]);
    })
  }
  }
}
