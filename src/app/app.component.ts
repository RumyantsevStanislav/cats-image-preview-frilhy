import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  withDescription = false;

  activeCat = 0;

  cats: readonly string[] = [
    'https://img3.goodfon.ru/wallpaper/nbig/b/4b/cat-kot-ryzhiy.jpg',
    'https://img4.goodfon.com/wallpaper/nbig/6/4a/kot-koshka-vzgliad-boke.jpg',
    'https://foma.ru/wp-content/uploads/2016/02/8511091946_46c80bd3f5_k-e1454938833900-768x415.jpg'
  ];

  liked: readonly number[] = [];

  onCatIndexChange(index: number) {
    this.activeCat = index;
  }

  removeCat(index: number) {
    this.cats = [...this.cats.slice(0, index), ...this.cats.slice(index + 1)];
    this.activeCat = Math.min(index, this.cats.length - 1);
  }

  likeCat(index: number) {
    this.liked = [...this.liked, index + 1];
  }
}
