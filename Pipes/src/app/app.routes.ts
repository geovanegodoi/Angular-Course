import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const rootRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home'    , component: HomeComponent     },
    { 
        path: 'form', 
        loadChildren: () => import('./form/formulario.module').then(m => m.FormularioModule) 
    },
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
    { 
        path: 'filmes', 
        loadChildren: () => import('./filme/filme.module').then(m => m.FilmeModulo) 
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