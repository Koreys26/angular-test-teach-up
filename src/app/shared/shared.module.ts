import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';

const components: any[] = [
  NavigationComponent,
  FilterButtonsComponent,
  CarouselComponent,
  ListCategoryComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [...components, MaterialModule]
})
export class SharedModule { }
