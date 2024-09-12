import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraBasicaComponent } from './calculadora-basica/calculadora-basica.component';
import { CalculadoraDeMediaComponent } from './calculadora-de-media/calculadora-de-media.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { IMCComponent } from './imc/imc.component';
import { ConversorDeTemperaturaComponent } from './conversor-de-temperatura/conversor-de-temperatura.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculadoraBasicaComponent,
    CalculadoraDeMediaComponent,
    ApoliceComponent,
    IMCComponent,
    ConversorDeTemperaturaComponent
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
