import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-de-media',
  templateUrl: './calculadora-de-media.component.html',
  styleUrls: ['./calculadora-de-media.component.css']
})
export class CalculadoraDeMediaComponent {

  media:number=0;
  AC1:number=0;
  AC2:number=0;
  AG:number=0;
  AF:number=0;
  resultado:string="";

  calcular(){
    this.media=(this.AC1*0.15)+(this.AC2*0.30)+(this.AG*0.10)+(this.AF*0.45);
    if(this.media<5){
      this.resultado = "reprovado"
    }
    else{
      this.resultado = "aprovado"
    }
  }

}
