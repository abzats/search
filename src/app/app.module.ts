import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppGlobals } from './app.globals';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ResultsComponent } from './components/search-results/results/results.component';

import { HttpService } from "./services/http.service";
import { MenuComponent } from './components/search-results/menu/menu.component';
import { Nl2brPipe } from './pipes/nl2br.pipe';
import { HightlightPipe } from './pipes/hightlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchResultsComponent,
    SearchFieldComponent,
    ResultsComponent,
    MenuComponent,
    Nl2brPipe,
    HightlightPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OrderModule,
    FilterPipeModule
  ],
  providers: [
    AppGlobals,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
