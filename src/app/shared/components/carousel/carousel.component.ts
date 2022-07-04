import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Plants } from 'src/app/core/services/data.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() products: Plants[] = [];

  index = 0;

  constructor() {}

  getSlide() {
    return this.products[this.index]?.pictures[0];
  }

  getPrev() {
    this.index = this.index === 0 ? 0 : this.index - 1;
  }
  getNext() {
    this.index =
      this.index === this.products.length
        ? this.index
        : this.index + 1;
  }
}
