import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-squareblocks',
  templateUrl: './small-squareblocks.component.html',
  styleUrls: ['./small-squareblocks.component.scss'],
})
export class SmallSquareblocksComponent  implements OnInit {
  @Input() item : any;


  constructor() { }

  ngOnInit() {}

}
