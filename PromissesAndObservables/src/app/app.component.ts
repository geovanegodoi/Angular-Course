import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})

export class AppComponent implements OnInit {
  
  title = 'Promisses And Observables';

  minhaPromise(nome: string) : Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === 'Geovane') {
        setTimeout(() => {
          resolve('Seja bem-vindo ' + nome)
        }, 2000);
      }
      else {
        reject('Ops! Voce nao é o Geovane');
      }
    });
  }

  minhaObservable(nome: string) : Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Geovane') {
        subscriber.next('Olá ' + nome + '!');
        setTimeout(() => {
          subscriber.complete()
        }, 2000);
      }
      else {
        subscriber.error('Ops! Deu erro');
      }      
    });
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Geovane') {
        const usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario)
        }, 4000);

        setTimeout(() => {
          subscriber.complete()
        }, 5000);
      }
      else {
        subscriber.error('Ops! Deu erro');
      }      
    });
  }

  executaComDelay(action: any, delay: number) {
    setTimeout(() => { action() }, delay);
  }

  ngOnInit(): void {

    this.minhaPromise('Geovane')
        .then(result => console.log(result))
        .catch(error => console.log(error));

    this.minhaPromise('Jose')
        .then(result => console.log(result))
        .catch(error => console.log(error));

    this.minhaObservable('Geovane')
        .subscribe(
          result => console.log(result),
          error => console.log(error)
          );

    this.minhaObservable('Antonio')
        .subscribe(
          result => console.log(result),
          error => console.log(error)
          );
    /*
    const observer = {
      next: (valor: any) => console.log('Next: ' + valor),
      error: (valor: any) => console.log('Erro: ' + valor),
      complete: () => console.log('Complete: Fim')
    }    
    const observable = this.minhaObservable('Geovane');
    observable.subscribe(observer);
    */

    const observer = {
      next: (valor: any) => console.log(valor),
      error: (valor: any) => console.log(valor),
      complete: () => console.log('Complete: Fim')
    }
    const observable = this.usuarioObservable('Geovane', 'godoi@email.com');
    const subscribe = observable.subscribe(observer);

    setTimeout(() => {
      subscribe.unsubscribe()
    }, 3500);
   
  }
}

export class Usuario {

  Nome: string;
  Email: string;

  constructor(nome: string, email: string) {
    this.Nome = nome;
    this.Email = email;
  }
}