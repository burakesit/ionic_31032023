import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login_email:any;
  login_password:any;
  loginform(e:any){
    console.log("requested data,e.value");
    console.log("this is not a safe way t opass data!!!");
    let url="/home2";
    let url_withparameter = "/home2?email="
      +e.value.login_email+"&password="
      +e.value.login_password;
      
  }
  constructor() {}

}
