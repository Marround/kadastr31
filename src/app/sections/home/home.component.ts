import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
declare let $: any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastNews: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    window.scroll(0, 0);

    this.homeService.getJSON().subscribe(data => this.lastNews = data.news);

    $('.carousel').carousel({
      interval: 5000,
      pause: false
    });
  }

}
