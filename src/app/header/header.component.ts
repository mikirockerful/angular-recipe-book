import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onLoadData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
