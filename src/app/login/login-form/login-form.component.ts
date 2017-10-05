import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  form_login(form: NgForm) {
    if (!form.valid)
      return;
    this.afAuth.auth.signInWithEmailAndPassword(form.controls.email.value, form.controls.senha.value)
      .then(ok => {
        this.router.navigate(['/cadastro']);
      });

    form.controls.email.setValue('');
    form.controls.senha.setValue('');
  }
}
