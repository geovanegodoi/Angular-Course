import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatoComponent } from "./contato/contato.component";
import { SobreComponent } from "./sobre/sobre.component";
import { FormularioRoutingModule } from "./formulario.routes";

@NgModule({
    declarations: [
        CadastroComponent,
        ContatoComponent,
        SobreComponent,      
    ],
    imports:[
        CommonModule,
        FormsModule,
        FormularioRoutingModule,
        CustomFormsModule,
        ReactiveFormsModule,
        NgBrazil,
        TextMaskModule
    ]
})
export class FormularioModule {}