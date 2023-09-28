import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodcategory',
  templateUrl: './foodcategory.page.html',
  styleUrls: ['./foodcategory.page.scss'],
})
export class FoodcategoryPage implements OnInit {
  data : any = {}
  cartData: any = {}
  isLoading: boolean = false
  cart: any
  storeData : any
  items : any= [ 
    {uid:'1',cover:'./../../../../assets/burger1.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers', price: 30.2, rating:'0', quantity:0},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: 30.2, rating: '0', quantity:0},
      {uid:'3',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: 30.2, rating: '0', quantity:0},
      {uid:'4',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: 30.2, rating: '2', quantity:0},
      {uid:'5',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: 30.2, rating: '2', quantity:0},
      {uid:'6',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2', price: 30.2, rating: '2', quantity:0},
      {uid:'7',cover:'./../../../../assets/burger3.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers3', price: 30.2, rating: '3', quantity:0}
  ];

  resturants :any[]=
    [
      {uid:'1',cover:'', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers'},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burgers2'},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burgers3'}
    ]
  
  private route: ActivatedRoute;
  private navCtrl: NavController;
  private router : Router;
  id : any

  constructor(private activatedRoute: ActivatedRoute, private navcontroller: NavController, private customRouter: Router) {
    this.navCtrl = navcontroller;
   this.route = activatedRoute;
   this.router = customRouter
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

  getCart(){
    // return Preferences.get({key:"cart"});
    return localStorage.getItem('cart');

  }
  async geFoodItem(){
    this.isLoading =true;
    this.data = {}
    this.cartData ={}
    this.storeData={}
    setTimeout(async ()=>{
      this.data = this.resturants.filter(x=> x.uid===this.id)
      // this.items = this.resturants.filter(x=> x.uid ===this.id)
      console.log(this.data)
      this.cart = await this.getCart()
      let jsonCart = JSON.parse(this.cart)
      console.log(jsonCart)
      if(jsonCart?.items){
          // this.storeData =JSON.parse(cart.items);
          this.storeData = jsonCart?.items
          console.log(this.storeData)
          // if(this.id ===  this.storeData.Map((x)=> x.id) && this.items.length > 0){
          //   this.items.forEach

          // }
      }
      this.isLoading =false;
      return this.data ;
    }, 3000)
  }


  quantityPlus(index:any){
    try {
      console.log(this.items[index])
      if(!this.items[index].quantity || this.items[index].quantity == 0){
        this.items[index].quantity = 1
        this.calculate()
      }else{
        this.items[index].quantity +=1
        this.calculate()
      }
      
    } catch (error) {
      console.log(error)
      
    }


  }
  quantityMinus(index:any){
    try {
       console.log(this.items[index])
      if(this.items[index].quantity !==0 ){
        this.items[index].quantity -= 1
      } else{
        this.items[index].quantity =0;
      }
      this.calculate();
    } catch (error) {
      console.log(error)
      
    }

  }
  calculate(){
    console.log(this.items);
    this.cartData.items =[];

    let item = this.items.filter((x: { quantity: number; })=> x.quantity >0)
    console.log("added", item);
    
    this.cartData.items =item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0; //holds number of items
    item.forEach((element: any) => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += parseFloat(element.price) * parseFloat(element.quantity);
    })
    this.cartData.totalPrice= parseFloat(this.cartData.totalPrice).toFixed(2)
    if(this.cartData == 0){
      this.cartData.totalItem =0;
      this.cartData.totalPrice=0;
    }
    console.log('cart', this.cartData)

    

  }
  saveToCart(){
    try {
      this.cartData.food ={}
      this.cartData.food = this.data;
      console.log("Cart Data", this.cartData);
      localStorage.setItem('cart', JSON.stringify(this.cartData));
      // await Preferences.set({key: 'cart', value: JSON.stringify(this.cartData)})
    } catch (error) {
      console.log(error)
      
    }

  }
  async viewCart(){
    if(this.cartData.items && this.cartData.items.length > 0 ){
      this.saveToCart()
      this.router.navigate([this.router.url + '/cart'])

    }
  }
}
