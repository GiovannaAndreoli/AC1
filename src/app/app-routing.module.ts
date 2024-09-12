import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IMCComponent } from './imc/imc.component';
import { ConversorDeTemperaturaComponent } from './conversor-de-temperatura/conversor-de-temperatura.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { CalculadoraDeMediaComponent } from './calculadora-de-media/calculadora-de-media.component';
import { CalculadoraBasicaComponent } from './calculadora-basica/calculadora-basica.component';

const routes: Routes = [
 
 
  { path: 'imc', component: IMCComponent },
  { path: 'conversor-de-temperatura', component: ConversorDeTemperaturaComponent},
  { path: 'apolice', component: ApoliceComponent },
  { path: 'media', component: CalculadoraDeMediaComponent },
  {path: 'calculadorabasica', component:CalculadoraBasicaComponent }
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
