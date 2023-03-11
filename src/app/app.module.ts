import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegComponent } from './add-reg/add-reg.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewDataComponent } from './view-data/view-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
const myRoute:Routes=[
{
  path:"",
  component:AddRegComponent
  
},
{
  path:"view",
  component:ViewDataComponent
},
{
  path:"search",
  component:SearchComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AddRegComponent,
    ViewDataComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
