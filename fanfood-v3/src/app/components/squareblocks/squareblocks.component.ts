import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-squareblocks',
  templateUrl: './squareblocks.component.html',
  styleUrls: ['./squareblocks.component.scss'],
})
export class SquareblocksComponent  implements OnInit {

@Input() item : any;
@Input() i : any;
@Output() add: EventEmitter<any> = new EventEmitter();
@Output() minus: EventEmitter<any> =new EventEmitter ();


  constructor() { }

  ngOnInit() {}

  quantityPlus(index:any){
    index= this.i
    this.add.emit(index);

  }
  quantityMinus(index:any){
    index= this.i
    this.minus.emit(index);


  }

}
