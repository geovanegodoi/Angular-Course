import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './reactiveForms/contato/contato.component';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home'    , component: HomeComponent     },
    { path: 'sobre'   , component: SobreComponent    },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'contato' , component: ContatoComponent  },
    { path: 'produtos', loadChildren: () => 
                            import('./arquitetura-componentes/produto.module')
                            .then(m => m.ProdutoModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, {useHash: false})
    ],
    exports: [
        RouterModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
})
export class RoteamentoModule {}