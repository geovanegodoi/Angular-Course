import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filme-dashboard.component.html',
  styles: [
  ]
})
export class FilmeDashboardComponent implements OnInit {

  filmes: Filme[];

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmes = this.filmeService.obterTodos();
  }
}
