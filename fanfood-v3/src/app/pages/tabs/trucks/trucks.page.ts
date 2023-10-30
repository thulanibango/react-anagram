import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './trucks.page.html',
  styleUrls: ['./trucks.page.scss'],
})
export class TrucksPage implements OnInit {

  respFood : any 
  id : any
   paramId:any
  food:any [] = [
    {fid:1, name:"Cheese Burger", cover:"./../../../../assets/burger1.jpeg", rating:3,truckUnder:'2',category:'popular', foodCategory:'burger'},
    {fid:2, name:"Beef Pizza", cover:"./../../../../assets/burger2.jpeg", rating:3,truckUnder:'3',category:'popular',foodCategory:'Pizza'},
    {fid:3, name:"Corn dog", cover:"./../../../../assets/burger3.jpeg", rating:3,truckUnder:'2',category:'popular', foodCategory:'Hotdogs'},
  ]

    
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      console.log("data", paramMap)
      this.paramId = paramMap.get('truckId');
      console.log(this.paramId)
      this.respFood = this.food.filter((x:any)=>x.truckUnder == this.paramId);
      console.log(this.respFood)

    })
  }

  geFoodItem(){
    // this.data = {}
    this.respFood = this.food.filter(x=> x.uid===this.id)
    console.log(this.respFood)
  }


}
