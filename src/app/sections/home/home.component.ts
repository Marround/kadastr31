import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
declare let $: any;
// import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastNews: [];
  reviews: any;

  newsUrl = '/assets/json/lastnews.json';

  reviewsUrl = '/assets/json/reviews.json';

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    window.scroll(0, 0);

    this.homeService.getJSON(this.newsUrl).subscribe(data => this.lastNews = data.news.filter(
      function(tmp, index){
        return index > data.news.length - 6;
      })
    );

    this.homeService.getJSON(this.reviewsUrl).subscribe(data => this.reviews = data.reviews.filter(
      function(tmp, index){
        return index > data.reviews.length - 6;
      }
    ));

    $('#news-slider').carousel({
      interval: 5000
    });
    $('#reviewback-slider').carousel({
      interval: 7000
    });
  }

}
