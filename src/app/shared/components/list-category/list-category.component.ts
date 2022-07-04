import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/services/data.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  @Input() categories: Categories[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
