import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegComponent } from './add-reg/add-reg.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
{
  path:"",
  component:AddRegComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AddRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
