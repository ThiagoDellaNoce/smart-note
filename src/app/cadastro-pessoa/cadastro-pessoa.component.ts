import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {
  pessoas: Array<any>;

  ngOnInit() { }

}
