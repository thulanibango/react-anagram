import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-stadium',
  templateUrl: './loading-stadium.component.html',
  styleUrls: ['./loading-stadium.component.scss'],
})
export class LoadingStadiumComponent  implements OnInit {
 dummy: number[] = new Array(10);
  constructor() { }

  ngOnInit() {}

}
