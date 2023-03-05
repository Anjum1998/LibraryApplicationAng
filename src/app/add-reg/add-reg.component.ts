import { Component } from '@angular/core';

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
readValue=()=>
{
  let data:any={"title":this.title,"date":this.date,"description":this.description,"author":this.author,"url":this.url,
"image":this.image}
  console.log(data)
}

}
