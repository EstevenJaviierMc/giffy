import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Query } from '@app/shared/models/Query';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  keyword: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Query) => (this.keyword = params.keyword)
    );
  }
}
