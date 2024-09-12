import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-basica',
  templateUrl: './calculadora-basica.component.html',
  styleUrls: ['./calculadora-basica.component.css']
})
export class CalculadoraBasicaComponent {

  num1:number=0;
  num2:number=0;
  resultado:number=0;
  operacao:string=""

  calcular(){
    if (this.operacao == "+"){
      this.resultado = this.num1 + this.num2;
    }
    else if
    (this.operacao == "-"){
      this.resultado = this.num1 - this.num2;
    }
    else if (this.operacao == "*"){
      this.resultado = this.num1 * this.num2;
    }
    else  if(this.operacao == "/"){
      this.resultado = this.num1 / this.num2;
    }
   
  }

}

