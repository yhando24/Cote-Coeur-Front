import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user : Logeur = new Logeur();

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user.email + this.user.password);

    this.router.navigate(['/accueil'])
  }
}

export class Logeur {
  email: string;
  password: string;
  actif : boolean;
}
