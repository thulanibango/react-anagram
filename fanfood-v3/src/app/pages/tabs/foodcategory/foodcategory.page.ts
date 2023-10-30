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
  respFood:any
  items : any= [ 
    {uid:'1',cover:'./../../../../assets/burger1.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burger', price: 30.2, rating:'0', quantity:0, btnText: "Buy"},
      {uid:'2',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burger', price: 30.2, rating: '0', quantity:0, btnText: "Buy"},
      {uid:'3',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'Pizza', price: 312.2, rating: '0', quantity:0, btnText: "Buy"},
      {uid:'4',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'Pizza', price: 1.2, rating: '2', quantity:0, btnText: "Buy"},
      {uid:'5',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'Hotdog', price: 30.2, rating: '2', quantity:0, btnText: "Buy"},
      {uid:'6',cover:'./../../../../assets/burger2.jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'Hotdog', price: 30.2, rating: '2', quantity:0, btnText: "Buy"},
      {uid:'7',cover:'./../../../../assets/burger3.jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burger', price: 30.2, rating: '3', quantity:0, btnText: "Buy"}
  ];

  resturants :any[]=
    [
      {uid:'1',cover:'./../../../assets/download (3).jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'Pizza'},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', menuItem:'burger2', restName: 'burgerjoint', category: 'burger'},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', menuItem:'burger1', restName: 'burgerjoint', category: 'burger'}
    ]
  
  private route: ActivatedRoute;
  private navCtrl: NavController;
  private router : Router;
  id : any
  foodCategory: any

  constructor(private activatedRoute: ActivatedRoute, private navcontroller: NavController, private customRouter: Router) {
    this.navCtrl = navcontroller;
    this.route = activatedRoute;
    this.router = customRouter
   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      console.log("data:"  ,paramMap )
      if(!paramMap.has('foodId')){
        this.navCtrl.back();
      }
      this.id = paramMap.get('foodId');
      this.foodCategory = paramMap.get('foodCategory')
      console.log(this.id)
    })
    this.respFood = this.geFoodItem();
    console.log(this.respFood);
  };

  

  getCart(){
    // return Preferences.get({key:"cart"});
    return localStorage.getItem('cart');

  }
  

geFoodItem() {
  this.isLoading = true;
  this.cartData = {};
  this.storeData = {};
  try {
    this.data = this.items.filter((x:any) => x.category == this.foodCategory);
    // this.cart =  this.getCart();
    // let jsonCart = JSON.parse(this.cart);
    // console.log(jsonCart);
    // if (jsonCart?.items) {
    //   this.storeData = jsonCart.items;
    //   console.log(this.storeData);
    // }
    // console.log(this.data);
    this.isLoading = false;
    return this.data;
  } catch (error) {
    // Handle errors, e.g., logging or displaying an error message.
    console.error(error);
  }
}

  // async geFoodItem(){
  //   this.isLoading =true;
  //   this.cartData ={}
  //   this.storeData={}
  //   setTimeout(async ()=>{
  //     this.data = this.resturants.filter(x=> x.category==this.foodCategory)
  //     console.log(this.data)
  //     // this.items = this.resturants.filter(x=> x.uid ===this.id)
  //     console.log(this.data)
  //     this.cart = await this.getCart()
  //     let jsonCart = JSON.parse(this.cart)
  //     console.log(jsonCart)
  //     if(jsonCart?.items){
  //         // this.storeData =JSON.parse(cart.items);
  //         this.storeData = jsonCart?.items
  //         console.log(this.storeData)
  //         // if(this.id ===  this.storeData.Map((x)=> x.id) && this.items.length > 0){
  //         //   this.items.forEach

  //         // }
  //     }
  //     this.isLoading =false;
  //     console.log(this.data)
  //     return this.data ;
  //   }, 3000)
  //    console.log(this.data) ;

  // }


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
      console.log(this.router.url)
      this.router.navigate([this.router.url + '/cart'])

    }
  }
 

}
