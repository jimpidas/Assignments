import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TotalpostComponent } from './totalpost/totalpost.component';
import { NewpostComponent } from './newpost/newpost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TotalpostComponent,
    NewpostComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
