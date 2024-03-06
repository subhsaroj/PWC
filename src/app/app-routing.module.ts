import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
