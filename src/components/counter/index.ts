import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RioButton } from '../button';

@Component({
  selector: 'rio-counter',
  template: `
    <div class="flex">
      <rio-button
        className="bg-black col-2"
        (onClick)="decrement.emit()">
        -
      </rio-button>

      <div class="flex-auto flex-center center h1">
        {{ counter$ | async }}
      </div>

      <rio-button className="col-2"
        (onClick)="increment.emit()">
        +
      </rio-button>
    </div>
  `,
  directives: [RioButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RioCounter {
  @Input() counter$: Observable<number>;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
};
