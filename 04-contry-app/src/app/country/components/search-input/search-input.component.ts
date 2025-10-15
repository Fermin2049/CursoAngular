import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Buscar');
  value = output<string>();

  imputValue = signal<string>('');

  debonceEffect = effect((onClenup) => {
    const value = this.imputValue();

    const timeot = setTimeout(() => {
      this.value.emit(value);
    }, 500);

    onClenup(() => clearTimeout(timeot));
  });
}
