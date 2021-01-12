import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { RoteamentoModule } from './app.routes';
import { FormularioModule } from './reactiveForms/formulario.module';
import { AuthGuard } from './services/auth.guard';
import { CadastroGuard } from './services/cadastro.guard';
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
  providers: [
    AuthGuard,
    CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
