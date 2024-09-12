import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {
  peso:number=0;
  altura:number=0;
  imc:number=0;
  resultado:string="";

  calcular(){
    this.imc=(this.peso/Math.pow(this.altura,2))

    if(this.imc<18.5){
      this.resultado="abaixo do peso"
    }
    else if(this.imc<=24.9){
      this.resultado=" peso normal"
    }
    else if(this.imc<=29.9){
      this.resultado=" sobrepeso"
    }
    else  if(this.imc<=34.9){
      this.resultado="obesidade grau 1"
    }
    else if(this.imc<=39.9){
      this.resultado="obesidade grau 2"
    }
    else  if(this.imc>40){
      this.resultado="obesidade grau 3"
    }
  }


}
