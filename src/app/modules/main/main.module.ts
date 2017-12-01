import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Components
 */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './main.component';

/**
 * Modules
 */
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from './../shared/shared.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { RadioTestComponent } from './components/radio-test/radio-test.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent, 
    MainComponent, UserRegisterComponent, RadioTestComponent
  ]
})
export class MainModule { }
