import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() {
  }

  ngOnInit() {
  }

  addIngredient() {
    this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
