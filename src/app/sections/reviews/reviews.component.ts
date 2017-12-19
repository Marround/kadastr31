import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewsUrl = '/assets/json/reviews.json';
  reviews: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.homeService.getJSON(this.reviewsUrl).subscribe(data => this.reviews = data.reviews);
  }

}
