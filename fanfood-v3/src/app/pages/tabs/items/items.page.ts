import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  stadiumData :any [] =[]
  truckData :any [] =[]
  selectedStadium :any
  private route: ActivatedRoute;
  private navCtrl: NavController;
  private router : Router;
  paramId:any
  respData:any
  respTrucks:any


  constructor(private activatedRoute: ActivatedRoute, private navcontroller: NavController, private customRouter: Router) {
    this.navCtrl = navcontroller;
    this.route = activatedRoute;
    this.router = customRouter
   }



  ngOnInit() {
    this.stadiumData=[
      {sid:1,cover:'./../../../assets/images.jpeg',smallImg:"./../../../assets/images.jpeg" ,name:'Moses Mabhida', stadiumLocation:'Durban, KZN', distance:1.5, description:"lorem6 lorem", members:234},
      {sid:2,cover:'./../../../assets/download (3).jpeg',smallImg:"./../../../assets/images.jpeg" , name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5, description:"lorem6 lorem", members:234},
      {sid:3,cover:'./../../../assets/download (3).jpeg',smallImg:"./../../../assets/images.jpeg" , name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5, description:"lorem6 lorem", members:234}
    ];
    this.truckData =[
      {tid:1,name:"Beer shack", cover:'./../../../assets/download (4).jpeg', stadiumUnder:2,category:"popular"},
      {tid:2,name:"Beer shack", cover:'./../../../assets/download (4).jpeg', stadiumUnder:3,category:"normal"},
      {tid:3,name:"Beer shack", cover:'./../../../assets/download (5).jpeg', stadiumUnder:2,category:"normal"},
      {tid:4,name:"Beer shack", cover:'./../../../assets/download (4).jpeg', stadiumUnder:3,category:"popular"},
      {tid:5,name:"Beer shack", cover:'./../../../assets/download (4).jpeg', stadiumUnder:3,category:"normal"},
    ]

    this.route.paramMap.subscribe(paramMap =>{
      console.log("data:"  ,paramMap )
      this.paramId = paramMap.get('stadiumId');
      console.log(this.paramId )
      this.respTrucks = this.truckData.filter((x:any)=>x.stadiumUnder == this.paramId);
    
      this.selectedStadium = this.stadiumData.filter((x:any)=>x.sid == this.paramId);
      this.respData = this.selectedStadium[0]
      console.log(this.respData)
    })
  }


}
