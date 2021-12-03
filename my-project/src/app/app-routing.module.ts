import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { NewpostComponent } from './newpost/newpost.component';
import { TotalpostComponent } from './totalpost/totalpost.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
                        { path: 'newpost', component: NewpostComponent },
                        { path: 'display', component: DisplayComponent },
                        { path: 'totalpost', component: TotalpostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
