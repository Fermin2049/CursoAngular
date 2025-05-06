import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItemComponent {
  imageUrl = input.required<string>();
}
