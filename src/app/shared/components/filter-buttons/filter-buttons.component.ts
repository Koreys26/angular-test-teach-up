import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from 'src/app/core/services/data.model';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss'],
})
export class FilterButtonsComponent implements OnInit {
  @Input() categories: Categories[] = [];

  @Output() categorySelected = new EventEmitter<Categories>();

  selectedCategory: Categories = {} as any;

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  setSelectedCategory(category: Categories) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
