import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menus: MenuItem[] = 
  [
    { link: '/home'          , name: 'Home'     , exact: true  , admin: false },
    { link: '/form/cadastro' , name: 'Cadastro' , exact: true  , admin: false },
    { link: '/form/sobre'    , name: 'Sobre'    , exact: true  , admin: false },
    { link: '/form/contato'  , name: 'Contato'  , exact: true  , admin: false },
    { link: '/produtos'      , name: 'Produtos' , exact: false , admin: false },
    { link: '/admin'         , name: 'Admin'    , exact: false , admin: true  },
    { link: '/filmes'        , name: 'Filmes'   , exact: false , admin: false },    
  ];
}

export interface MenuItem {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}