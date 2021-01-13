import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatoComponent } from "./contato/contato.component";
import { SobreComponent } from "./sobre/sobre.component";
import { CadastroGuard } from "../services/cadastro.guard";

const formularioRoutes: Routes = [
    { path: 'cadastro', component: CadastroComponent , canDeactivate: [CadastroGuard] },            
    { path: 'contato' , component: ContatoComponent },
    { path: 'sobre'   , component: SobreComponent   }
];

@NgModule({
    imports: [
        RouterModule.forChild(formularioRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormularioRoutingModule {}