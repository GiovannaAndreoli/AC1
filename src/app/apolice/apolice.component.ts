import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nome:string="";
  sexo:string="";
  idade:number=0;
  valor:number=0;
  resultado:number=0;

  calcular(){
    if(this.sexo=="M"&&this.idade<=25){
      this.resultado= this.valor*0.15
    }
    else if(this.sexo=="M"&&this.idade>25){
      this.resultado= this.valor*0.10
    }
    else if(this.sexo=="F"){
      this.resultado= this.valor*0.08
    }
  }
}
