import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';


import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    HomeComponent,
    PopularProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'PopularProducts',
      component: PopularProductsComponent,
    },
    {
      path: '',
      component: HomeComponent,
    },
    ]),
    AccordionModule,
    ButtonModule,
    DropdownModule,
    MenuModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
