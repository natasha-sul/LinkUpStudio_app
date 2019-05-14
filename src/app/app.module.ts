import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';



import { AccordionModule } from 'primeng/accordion';
import { ButtonModule  } from 'primeng/button';
import { DropdownModule  } from 'primeng/dropdown';
import { MenuModule  } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    PopularProductsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
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
      path: 'header',
      component: HeaderComponent,
    },
    {
      path: 'footer',
      component: FooterComponent,
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
