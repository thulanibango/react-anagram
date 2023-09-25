import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodcategory',
  templateUrl: './foodcategory.page.html',
  styleUrls: ['./foodcategory.page.scss'],
})
export class FoodcategoryPage implements OnInit {
  data : any = {}
  items : any= [ 
    {uid:'1',cover:'./../../../../assets/burger1.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers', price: '30,2', rating:'1'},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: '30,2', rating: '2'},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: '30,2', rating: '2'},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: '30,2', rating: '2'},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: '30,2', rating: '2'},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: '30,2', rating: '2'},
      {uid:'3',cover:'./../../../../assets/burger3.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers3', price: '30,2', rating: '3'}
  ];

  resturants :any[]=
    [
      {uid:'1',cover:'', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers'},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2'},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers3'}
    ]
  
  private route: ActivatedRoute;
  private navCtrl: NavController;
  id : any

  constructor(private activatedRoute: ActivatedRoute, private navcontroller: NavController) {
    this.navCtrl = navcontroller;
   this.route = activatedRoute;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      console.log("data:"  ,paramMap )
      if(!paramMap.has('menuId')){
        this.navCtrl.back();
      }
      this.id = paramMap.get('menuId');
      console.log(this.id)
    })
    this.geFoodItem();
    console.log(this.geFoodItem())
  }
  geFoodItem(){
    this.data = {}
    this.data = this.resturants.filter(x=> x.uid===this.id)
    console.log(this.data)
    return this.data ;
  }
}
