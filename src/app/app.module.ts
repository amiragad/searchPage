import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchByCityFiltrationPipe } from './pipes/search-city-filtration.pipe';
import { SearchByNameFiltrationPipe } from './pipes/search-name-filtration.pipe';
import { SearchByPriceFiltrationPipe } from './pipes/search-price-filtration.pipe';
import { SearchByRangFiltrationPipe } from './pipes/search-rang-filtration.pipe';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SearchByDaysFiltrationPipe } from './pipes/search-days-filtration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SliderComponent,
    SearchByCityFiltrationPipe,
    SearchByNameFiltrationPipe,
    SearchByPriceFiltrationPipe,
    SearchByRangFiltrationPipe,
    SearchByDaysFiltrationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    OrderModule,
    Ng2SearchPipeModule,
    DateRangePickerModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
