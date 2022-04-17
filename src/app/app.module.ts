import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyDisplayComponent } from './my-display/my-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    CalculadoraComponent,
    MyDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
