import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @Input() item : any;
  @Input() i : any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() minus: EventEmitter<any> =new EventEmitter ();


  private router: Router
  urlCheck:any
  url:any
  respData:any
  cartInformation:any
  model:any = {}
  serviceFee =3
  constructor( private customRouter: Router) { 
    this.router = customRouter
  }

  ngOnInit() {
    this.checkUrl();
    // this.someFunction();
    this.getCartData();
    this.cartInformation = this.getCartData();
    console.log(this.cartInformation)
  }
  checkUrl(){
    let url = this.router.url.split('/');
    console.log(url)
    const spliced = url.splice(url.length -2,2)
    this.urlCheck = spliced[0]
    console.log( this.urlCheck )
    url.push(this.urlCheck)
    this.url=url
    // console.log(url)
    return url
  }
  getCart(){
    // return Preferences.get({key:"cart"});
    return localStorage.getItem('cart');
  }
  // async getCartData(){
  //   let data: any = await this.getCart(); 
  //   console.log(data)
  //   this.respData = JSON.parse(data)
  //   console.log(this.respData)
  //   if (this.respData?.items) {
  //     this.model = await this.respData?.items
  //     console.log(this.model)
  //     this.calculate()
  //   }
  //   console.log(this.model)
  //   return this.model;
  // }
   getCartData() {
  try {
    let data: any =  this.getCart(); 
    this.respData = JSON.parse(data);

    if (this.respData) {
      this.model =  this.respData;
      this.calculate();
    }
    console.log([this.model])

    return this.model; // Return the model as a resolved promise
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw error; // Re-throw the error if there was an issue
  }
}
   async calculate() {
  console.log(this.model.items);
  
  // Check if this.model is an array before using filter
  if (Array.isArray(this.model.items)) {
    let item = this.model.items.filter((x: { quantity: number }) => x.quantity > 0);
    // console.log(item)
    this.model.items = item;
    console.log(item);

    // Initialize properties
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.serviceFee = 0;
    this.model.grandTotal = 0;
    // this.model.items = [];

    // Calculate totals
    item.forEach((element: any) => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += parseFloat(element.price) * parseFloat(element.quantity);
    });

    this.model.serviceFee = this.serviceFee;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + this.model.serviceFee).toFixed(2);

    if (this.model.totalItem === 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = null;
    }

    console.log('cart', this.model);
    return this.model;
  } else {
    console.error('this.model is not an array');
    // Handle the case where this.model is not an array
  }
}

//   async someFunction() {
//   try {
//     const cartData = await this.getCartData();
    
//     console.log(cartData); // You can now access the model object here
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

  clearCart(){
    // Preferences.remove({key: 'cart'})
    localStorage.removeItem("cart")
  }
  getPreviousUrl(){
    return this.url.join('/')
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
