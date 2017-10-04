import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: Observable<any[]>;
  // pessoas: FirebaseListObservable<any[]>;

  // constructor(db: AngularFireDatabase) {
  //   this.pessoas = db.list('pessoas');
  // }

  ngOnInit() {
    // this.pessoas =  new Array<any>();
  }


  constructor(db: AngularFireDatabase)
  {
    this.pessoas = db.list('pessoas').valueChanges();
  }

}
