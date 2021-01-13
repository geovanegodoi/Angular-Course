import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoAppComponent } from "./produto.app.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const produtoRoutes: Routes = [
    { 
        path: '', component: ProdutoAppComponent, 
        children: [
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ] 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule {}