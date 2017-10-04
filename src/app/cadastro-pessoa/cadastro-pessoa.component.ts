import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit
{
  pessoas: Array<any>;

  ngOnInit()
  {
    this.pessoas = new Array<any>();
  }

  form_submit(f: NgForm)
  {
    console.log(f);
    console.log(f.form.controls);
    console.log("valor do controle nome: " + f.form.controls.nome.value);

    this.pessoas.push({
      nome: f.form.controls.nome.value,
      sobrenome: f.form.controls.sobrenome.value
    });
    console.log(this.pessoas);
  }

}
