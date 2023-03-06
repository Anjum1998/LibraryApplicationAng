import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-reg',
  templateUrl: './add-reg.component.html',
  styleUrls: ['./add-reg.component.css']
})
export class AddRegComponent {
title=""
date=""
description=""
author=""
url=""
image=""
constructor(private api:ApiService){}
readValue=()=>
{
  let data:any={"title":this.title,"date":this.date,"description":this.description,"author":this.author,"url":this.url,
"image":this.image}
  console.log(data)
  this.api.addBook(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("suceessful")
      }
      else{
        alert("something wrong")
      }
    }
  )
}

}
