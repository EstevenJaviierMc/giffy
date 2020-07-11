import { Component, OnInit, Query } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Gif } from '@app/shared/models/Gif';
import { Pagination } from '@app/shared/models/Pagination';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form-component.html',
  styleUrls: ['./search-form-component.css'],
})
export class SearchFormComponent implements OnInit {
  formSearch: FormGroup;
  ratings: Array<any> = ['g', 'pg', 'pg-13', 'r'];

  gifs: Gif[];
  pagination: Pagination;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      keyword: [null, Validators.required],
      rating: ['g', Validators.required],
    });

    this.route.queryParams.subscribe((params: Query) => {
      this.formSearch.patchValue(params);
    });
  }

  handleSubmit() {
    this.router.navigate(['/search'], {
      queryParams: this.formSearch.value,
    });

    // this.giffyService.searchGifs().subscribe(
    //   ({ data, pagination }) => {
    //     this.gifs = data;
    //     this.pagination = pagination;
    //   },
    //   err => console.log(err)
    // );
  }
}
