import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent implements OnInit {

  constructor(private _counterSvc: CounterService) { }

  ngOnInit() {
  }

  incrementCounter() {
    this._counterSvc.counterValue = this._counterSvc.counterValue + 1;
  }
}
