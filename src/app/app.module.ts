import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { CalculateDetailsComponent } from './components/calculate-details/calculate-details.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    CalculateDetailsComponent,
    FormInputComponent,
    AboutUSComponent,
    IndustriesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
