import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { SobreComponent } from "../institucional/sobre/sobre.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatoComponent } from "./contato/contato.component";

@NgModule({
    declarations: [
        CadastroComponent,
        ContatoComponent,
        SobreComponent,      
    ],
    imports:[
        CommonModule,
        FormsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        NgBrazil,
        TextMaskModule
    ]
})
export class FormularioModule {}