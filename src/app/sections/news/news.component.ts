import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home/home.service';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsNumber: string;

  // private routeSubscription: Subscription;
  private querySubscription: Subscription;

  private newsUrl = '/assets/json/lastnews.json';
  news: any;

  constructor(private homeService: HomeService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.newsNumber = queryParam['q'];
      }
    );
  }

  ngOnInit() {
    window.scroll(0, 0);
    const newsId = this.newsNumber;
    if (this.newsNumber) {
      this.homeService.getJSON(this.newsUrl).subscribe(data => this.news = data.news.filter(
        function(tmp){
          return tmp.id === newsId;
        }
      ));
    }else {
      this.homeService.getJSON(this.newsUrl).subscribe(data => this.news = data.news);
    }
  }
}
