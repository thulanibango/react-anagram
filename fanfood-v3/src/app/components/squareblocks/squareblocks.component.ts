import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  toFoodDetail(id:any){
    // console.log("clicked")
    
      this.router.navigate(['/food-details', id]);

    }

  quantityPlus(index:any){
    index= this.i
    this.add.emit(index);

  }
  quantityMinus(index:any){
    index= this.i
    this.minus.emit(index);
  }

}
