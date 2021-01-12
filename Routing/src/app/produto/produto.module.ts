import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.routes";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { ProdutoDetalheComponent } from "./produto-detalhe/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./produto-detalhe/produto-count.component";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { AppProduto } from "./app.produto.component";
import { ProdutoService } from "./services/produto.service";

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppProduto,
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