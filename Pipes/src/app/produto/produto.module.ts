import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.routes";
import { ProdutoDetalheComponent } from "./produto-detalhe/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./produto-detalhe/produto-count.component";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoService } from "./services/produto.service";
import { ProdutoAppComponent } from "./produto.app.component";

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService
    ]
})
export class ProdutoModule {}