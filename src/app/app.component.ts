import { Component } from '@angular/core';
import { Pokemons } from './interfaces/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public pokemons: Pokemons[] = [
    { name: "Teste 1", link: "123" },
    { name: "Teste 2", link: "123" },
    { name: "Teste 3", link: "123" },
    { name: "Teste 4", link: "123" },
  ]

  ngOnInit(): void {
  }

  abrirPokemon(link: string) {
    console.log(link);

  }
}
