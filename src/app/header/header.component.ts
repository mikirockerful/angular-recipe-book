import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.header.component.css']
})
export class HeaderComponent {
  @Output() optionSelected = new EventEmitter<string>();

  itemSelected(event) {
    this.optionSelected.emit(event.target.id);
  }

}
