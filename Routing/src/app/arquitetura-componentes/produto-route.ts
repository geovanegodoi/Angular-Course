import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppProduto } from "./app.produto.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const produtoRouterConfig: Routes = [
    { 
        path: "", component: AppProduto, 
        children: [
            { path: "", component: ProdutoDashboardComponent },
            { path: "editar/:id", component: EditarProdutoComponent }
        ] 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule {}