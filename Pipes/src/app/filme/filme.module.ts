import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilmeDashboardComponent } from "./filme-dashboard/filme-dashboard.component";
import { FilmeRoutingModule } from "./filme.routes";
import { FilmeService } from "./services/filme.service";

@NgModule({
    declarations: [
        FilmeDashboardComponent
    ],
    imports: [
        CommonModule,
        FilmeRoutingModule
    ],
    providers: [
        FilmeService
    ]
})
export class FilmeModulo {}