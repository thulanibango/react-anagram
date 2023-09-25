import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './trucks.page.html',
  styleUrls: ['./trucks.page.scss'],
})
export class TrucksPage implements OnInit {

  data : any = {}
  id : any
  trucks:any [] = [
    {id:1, name:"Madlamini", img:"./../../../../assets/burger1.jpeg", rating:"3"},
    {id:2, name:"Mamqwathi", img:"./../../../../assets/burger2.jpeg", rating:"3"},
    {id:3, name:"Mazotsho", img:"./../../../../assets/burger3.jpeg", rating:"3"},
  ]

    
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      console.log("data", paramMap)
    })
  }

    geFoodItem(){
    this.data = {}
    this.data = this.trucks.filter(x=> x.uid===this.id)
    console.log(this.data)
  }


}
