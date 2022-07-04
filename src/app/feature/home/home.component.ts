import { Component, OnInit } from '@angular/core';
import { Categories, Data, Plants } from 'src/app/core/services/data.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: Data;
  selectedCategory: Categories;
  carouselSlidersLimit = 4;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
    this.selectedCategory = this.data.categories[0];
  }

  get getCarouselSliders(): Plants[] {
    return this.data.plants.filter(
      (plant) => plant.category_id === this.selectedCategory._id
    );
  }

  get getOrderedCategories(): Categories[] {
    return this.data.categories.sort((a, b) => a.label.localeCompare(b.label));
  }

  ngOnInit(): void {}

  setSelectedCategory(selectedCategory: Categories) {
    this.selectedCategory = selectedCategory;
  }
}
