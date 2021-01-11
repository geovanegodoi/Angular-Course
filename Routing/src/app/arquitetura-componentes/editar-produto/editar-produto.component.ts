import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, 
              private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let idProduto = params['id'];
      this.produto = this.produtoService.obterPorId(idProduto);
    });    
  }

  salvar() {

  }

}
