import {Component, OnInit} from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {NewsService} from "../../../core/services/news.service";
import {News} from "../../../core/models/news";

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
  consts = ConstantHelper;
  news: News[] = [];
  activePag = 0;
  paginators = [1,2,3,4,5];
  constructor(private _newsService: NewsService) {
  }

  ngOnInit(): void {
    this._newsService.getAll().subscribe(res => {
      this.news = res.model
    })
  }


}
