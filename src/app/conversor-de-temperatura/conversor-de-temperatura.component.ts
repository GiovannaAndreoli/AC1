import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-de-temperatura',
  templateUrl: './conversor-de-temperatura.component.html',
  styleUrls: ['./conversor-de-temperatura.component.css']
})
export class ConversorDeTemperaturaComponent {
  temperatura:number=0;
  F:number=0;
  K:number=0;

  converter(){
    this.F=(this.temperatura*(9/5))+32;
    this.K=(this.temperatura+273.15);
  }

}
