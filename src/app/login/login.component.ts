import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user : Logeur = new Logeur();

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.user.email + this.user.password)


  }
}

export class Logeur {
  email: string;
  password: string;
  actif : boolean;
}
