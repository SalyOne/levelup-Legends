import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  template: `
    <drag-scroll [scrollbar-hidden]="true" class="similar-carousel">
      <div drag-scroll-item class="image-container blue-color">
        <img src="./assets/images/similar-1.png" alt="similar 1"/>
        <div class="item-content">
          <h3 class="title">Get 300% Cashback</h3>
          <p>retrieve 300% bet amount as real money only here</p>
        </div>
      </div>
      <div drag-scroll-item class="image-container orange-color">
        <img src="./assets/images/similar-2.png" alt="similar 2"/>
        <div class="item-content">
          <h3 class="title">Coming Soon</h3>
          <p>retrieve 300% bet amount as real money only here</p>
        </div>
      </div>
      <div drag-scroll-item class="image-container purple-color">
        <img src="./assets/images/similar-3.png" alt="similar 3"/>
        <div class="item-content">
          <h3 class="title">Win a Jackpot</h3>
          <p>retrieve 300% bet amount as real money only here</p>
        </div>
      </div>
      <div drag-scroll-item class="image-container blue-color">
        <img src="./assets/images/similar-1.png" alt="similar 1"/>
        <div class="item-content">
          <h3 class="title">Get 300% Cashback</h3>
          <p>retrieve 300% bet amount as real money only here</p>
        </div>
      </div>
    </drag-scroll>
  `,
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  scroll: boolean = true;

}
