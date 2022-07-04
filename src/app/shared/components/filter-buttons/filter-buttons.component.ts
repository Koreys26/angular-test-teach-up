import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from 'src/app/core/services/data.model';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss'],
})
export class FilterButtonsComponent {
  @Input() categories: Categories[] = [];

  @Output() categorySelected = new EventEmitter<Categories>();

  selectedCategory(category: Categories) {
    this.categorySelected.emit(category);
  }
}
