import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
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
    for(let login of this.loginList){
      if(login.username==curr_login.username){
        if(login.passw == curr_login.passw){
          this.id = login.id;
          return "correct";
        }
        else{
          return "incorrect";
        }
      }
    }
    return "exist";
  }

  ngOnInit():void{
    this.getLogin();
  }

  onSubmit(){
    console.log("demn", this.login);
    const res = this.checkCorrect(this.login);
    console.log("id",this.id);
    if(res=="correct"){
      this.router.navigate(['cart-list',this.id]);
    }
    else if(res=="incorrect"){
      alert("Incorrect Password");
    }
    else{
      alert("User does not exist!");
    }
    console.log(this.loginList);
  }
}