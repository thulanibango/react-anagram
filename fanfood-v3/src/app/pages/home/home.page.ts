import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class Home implements OnInit{

  constructor() { }
  
  banners: any[]=[];
  stadium: any[]=[];
  isLoading: boolean=false
  ngOnInit(){
    this.isLoading = true
    setTimeout(()=> {
      this.banners=[
      {uid:'1',banner: './../../../assets/images (1).jpeg'},
      {uid:'2',banner: './../../../assets/images.jpeg'},
      {uid:'3',banner: './../../../assets/download (3).jpeg'}
    ];
    
    this.stadium=[
      {uid:'1',cover:'./../../../assets/images.jpeg', name:'Moses Mabhida', stadiumLocation:'Durban, KZN', distance:1.5},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5}
    ];
    this.isLoading = false
    }, 3000)
    
  }


  toggleDarkTheme( shouldAdd:boolean){
        document.body.classList.toggle('dark', shouldAdd);
      };
  toggleChange(event:any){
    console.log(window.matchMedia)
    const check= event.detail.checked;
    this.toggleDarkTheme(check)
  }

  
}

