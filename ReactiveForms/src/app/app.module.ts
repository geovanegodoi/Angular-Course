import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { rootRouterConfig } from './app.routes';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './reactiveForms/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuComponent,
    FooterComponent,
    CadastroComponent,
    ContatoComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
