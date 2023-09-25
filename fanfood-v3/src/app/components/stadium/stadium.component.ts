import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss'],
})
export class StadiumComponent  implements OnInit {
@Input() stadium:any
  constructor() { }

  ngOnInit() {}
  getStad(stad:any){
    return stad.join(', ');
  }

}
