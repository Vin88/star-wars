import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { StarsService } from './stars.service';
import { Stars } from './stars';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('heroState', [
      state('active', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('inactive',   style({
        backgroundColor: '#7cb7d2',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
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

  showStar(index) {
    this.stars[index].active = this.stars[index].active === 'active' ? 'inactive' : 'active';
  }

}
