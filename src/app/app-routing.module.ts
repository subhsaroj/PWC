import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculateDetailsComponent } from './components/calculate-details/calculate-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AppComponent } from './app.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { AboutCalculationComponent } from './components/about-calculation/about-calculation.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { SubscriptionComponent } from './components/subscription/subscrition.component';
import { valuedServicesComponent } from './components/valuedServices/valuedServices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AboutCalculationComponent,
  },
  {
    path: 'home',
    component: AboutCalculationComponent,
  },
  {
    path: 'insights',
    component: AddTutorialComponent,
  },
  {
    path: 'calculations',
    component: FormInputComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUSComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'industries',
    component: IndustriesComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'services',
    component: valuedServicesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
