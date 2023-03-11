import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(private api:ApiService) {}
title=""
searchVal:any=[]
searchData=()=>
{
  let data:any={"title":this.title}
  console.log(data)
  this.api.seaechBook(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("something went wrong")
      } else {
        this.searchVal=response
      }
    }
  )

}
}
