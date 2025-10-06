import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Buscar');
  value = output<string>();
  //  Método que emite lo que el usuario escribe
  emitirValor(texto: string) {
    this.value.emit(texto);
  }
}
