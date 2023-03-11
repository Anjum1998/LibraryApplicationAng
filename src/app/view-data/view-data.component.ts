import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {
constructor(private api:ApiService){
    api.viewBook().subscribe(
    (response)=>
    {
      this.data=response;
    }
  )
}
data:any=[]
}
