import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarsService } from './stars.service';
import { Stars } from './stars';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loader: boolean;
  err: string;
  stars: Array<Stars> = [];
  constructor(private starsService: StarsService) {
  }

  /**
   * Component initialization
   */
  ngOnInit() {
    this.getStars();

  }

  /**
   * Get list of stars
   */
  getStars() {
    this.loader = true;
    this.starsService.getStars().subscribe(
      data => {
        this.loader = false;
        if (data.results) {
          this.stars = data.results;
        } else {
          this.stars = [];
          this.err = 'No data found';
        }
      },
      err => {
        this.loader = false;
        this.err = err; // Custom  error message
      }
    );
  }

}
