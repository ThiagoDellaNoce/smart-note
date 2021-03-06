import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { LoginModule } from './login/login.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from './../environments/firebase.config';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    CadastroPessoaModule, LoginModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
