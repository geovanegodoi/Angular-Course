import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "../form/cadastro/cadastro.component";
import { ContatoComponent } from "../form/contato/contato.component";
import { SobreComponent } from "../form/sobre/sobre.component";
import { CadastroGuard } from "../services/cadastro.guard";
import { FilmeDashboardComponent } from "./filme-dashboard/filme-dashboard.component";

const filmeRoutes: Routes = [
    { path: '', component: FilmeDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(filmeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FilmeRoutingModule {}