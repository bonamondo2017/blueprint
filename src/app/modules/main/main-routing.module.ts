import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import { MainComponent } from './main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { RadioTestComponent } from './components/radio-test/radio-test.component'

const routes: Routes = [{
  path: '', component: MainComponent, children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, { 
    path: 'dashboard', 
    component: DashboardComponent 
  }, { 
    path: 'dashboard/:id', 
    component: DashboardComponent 
  }, {
    path: 'user-register',
    component: UserRegisterComponent
  }, {
    path: 'radio-test',
    component: RadioTestComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
 }
