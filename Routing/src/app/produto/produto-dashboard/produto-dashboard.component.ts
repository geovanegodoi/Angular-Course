import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ProdutoDetalheComponent } from '../produto-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../produto-detalhe/produto-count.component';
import { Produto } from '../produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild('teste', {static: false}) mensagemTela: ElementRef;
  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  @ViewChildren(ProdutoDetalheComponent) cards: QueryList<ProdutoDetalheComponent>;
  
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.obterTodos();
  }

  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto!!!');
      return;
    });

    console.log('Objeto do contador : ' , this.contador.produtos);

    console.log(this.cards);

    this.cards.forEach(c => {
      console.log(c.produto.nome);
    });
  }
  
  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
