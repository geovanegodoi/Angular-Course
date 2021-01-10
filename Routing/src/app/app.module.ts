import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { RoteamentoModule } from './app.routes';
import { FormularioModule } from './reactiveForms/formulario.module';
import { ProdutoDashboardComponent } from './arquitetura-componentes/produto-dashboard/produto-dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavegacaoModule,
    RoteamentoModule,
    FormularioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
