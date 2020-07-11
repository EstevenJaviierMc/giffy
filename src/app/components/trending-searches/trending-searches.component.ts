import { Component, OnInit } from '@angular/core';
import { GiffyService } from '@app/core/services/giffy.service';

@Component({
  selector: 'app-trending-searches',
  templateUrl: './trending-searches.component.html',
  styleUrls: ['./trending-searches.component.css'],
})
export class TrendingSearchesComponent implements OnInit {
  trendings: Array<any>;

  constructor(private giffyService: GiffyService) {}

  ngOnInit(): void {
    this.giffyService.getTrending().subscribe(
      ({ data }) => (this.trendings = data),
      err => console.log(err)
    );
  }

  generateMultiColorCategory(index: number) {
    const NEED_WHITE_COLOR = [3, 4];
    const colorIndex = (index % 5) + 1;
    const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
    const colorText = needWhite
      ? 'white'
      : 'var(--theme-body-bg)';

    return `
      background-color: var(--brand-color_${colorIndex});
      color: ${colorText};
    `;
  }
}
