import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GiffyService } from '@app/core/services/giffy.service';
import { Gif } from '@app/shared/models/Gif';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css'],
})
export class GifDetailsComponent implements OnInit {
  gif: Gif;
  constructor(
    private route: ActivatedRoute,
    private giffyService: GiffyService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) =>
      this.giffyService
        .getGifById(params.get('id'))
        .subscribe(
          ({ data }) => {
            this.gif = data;
            this.title.setTitle(`Giffy | ${data.title}`);
          },
          err => console.log(err)
        )
    );
  }
}
