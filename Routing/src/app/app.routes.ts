import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './reactiveForms/contato/contato.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { CadastroGuard } from './services/cadastro.guard';

const rootRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home'    , component: HomeComponent     },
    { path: 'sobre'   , component: SobreComponent    },
    { path: 'cadastro', component: CadastroComponent , canDeactivate: [CadastroGuard] },
    { path: 'contato' , component: ContatoComponent  },
    { 
        path: 'produtos', 
        loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule) 
    },
    { 
        path: 'admin', 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },   
    { path: '**', component: NotFoundComponent }    
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRoutes, { useHash: false, enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class RoteamentoModule {}