import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ]
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(private activatedRoute: ActivatedRoute, 
              private produtoService: ProdutoService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let idProduto = params['id'];
      this.produto = this.produtoService.obterPorId(idProduto);
    });    
  }

  salvar() {
    // fazer comunicacao com backend para salvar entidade
    this.router.navigate(['/produtos']);    
  }

}
