import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stadiums',
  templateUrl: 'stadiums.page.html',
  styleUrls: ['stadiums.page.scss']
})
export class Stadiums implements OnInit {
  query: string = '';
 
  isLoading: boolean= false;
  foundStad: any;
  @ViewChild('searchInput') $Input: any;
   model:any ={
    icon: "search-outline",
    title: "No Stadiums Matching the Search",
    subTitle: "Enter different stadium name"
  }
  allStadiums: any[]= [
      {uid:'1', cover:'./../../../assets/images.jpeg', name:'Moses Mabhida', stadiumLocation:'Durban, KZN', distance:1.5},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', name:'Royal ss', stadiumLocation:'Free State, ', distance:20.5}
    ];
  stadiums: any[]=[
    {uid:'1', cover:'./../../../assets/images.jpeg', name:'Moses Mabhida', stadiumLocation:'Durban, KZN', distance:1.5},
      {uid:'2',cover:'./../../../assets/download (3).jpeg', name:'Royal bfk', stadiumLocation:'Free State, ', distance:20.5},
      {uid:'3',cover:'./../../../assets/download (3).jpeg', name:'Royal ss', stadiumLocation:'Free State, ', distance:20.5}
  ];
  constructor() {}
 
  ngOnInit() {
    setTimeout(()=>{
      this.$Input.setFocus();
    },500)
  }

  async onSearchChange(event:any){
    this.query = event.detail.value.toLowerCase();
    this.stadiums = [];
    if(this.query.length > 0){
      this.isLoading = true;
      setTimeout(async() => {
        this.stadiums = await this.allStadiums.filter((element:any)=>{
            return element.name.toLowerCase().includes(this.query)
        // console.log(element.name.toLowerCase().includes(this.query))
        })
        this.isLoading = false; 
      }, 300);
    }
  }

}
