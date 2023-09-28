import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-trucks',
  templateUrl: './loading-trucks.component.html',
  styleUrls: ['./loading-trucks.component.scss'],
})
export class LoadingTrucksComponent  implements OnInit {
 dummy: number[] = new Array(10);
  constructor() { }

  ngOnInit() {}

}
