import { Component, OnInit } from '@angular/core';
import { Gif } from '@app/shared/models/Gif';
import { Pagination } from '@app/shared/models/Pagination';
import { GiffyService } from '@app/core/services/giffy.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Query } from '@app/shared/models/Query';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css'],
})
export class GifsListComponent implements OnInit {
  gifs: Gif[];
  pagination: Pagination;

  constructor(
    private giffyService: GiffyService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Query) => {
      this.giffyService
        .searchGifs(params as Query)
        .subscribe(
          ({ data, pagination }) => {
            this.handlerSEO({
              count: pagination?.count,
              keyword: params.keyword,
            });

            this.gifs = data;
            this.pagination = pagination;
          },
          err => console.log(err)
        );
    });
  }

  handlerSEO({ count, keyword }) {
    if (keyword) {
      this.title.setTitle(
        `Giffy | ${count} resultados de ${keyword}`
      );
    }

    this.meta.addTag({
      name: 'description',
      content: keyword,
    });
  }

  getMore = () => {
    this.giffyService
      .searchGifs({ keyword: 'rick', rating: 'r' })
      .subscribe(
        ({ data }) => {
          this.gifs.push(...data);
        },
        err => console.log(err)
      );
  };
}
