import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatChipsModule, MatNativeDateModule, MatCardModule, MatDialogModule, MatSelectModule, MatCheckboxModule,
  MatInputModule,MatSnackBarModule, MatIconModule, MatButtonModule, MatSlideToggleModule,MatToolbarModule, MatProgressBarModule, MatSliderModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

/**
 * Third-party package
 */
import 'hammerjs';

/**
 * Components
 */
import { CountdownComponent } from './components/countdown/countdown.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MenuSidenavComponent } from './components/menu-sidenav/menu-sidenav.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

/**
 * Guards
 */
import { AuthGuard } from './guards/auth.guard';

/**
 * Modules
 */
import { TextMaskModule } from 'angular2-text-mask';

/**
 * Services
 */
import { AuthenticationService } from './services/firebase/authentication.service';
import { CrudService } from './services/firebase/crud.service';

/**
 * Directives
 */
import { NtmSliderDirective } from './components/ntm-slider.directive';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatSliderModule
   ],
  exports:[
    CountdownComponent,
    DeleteConfirmComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MenuSidenavComponent,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSliderModule,
    ReactiveFormsModule,
    ScheduleComponent,
    TableDataComponent,
    TextMaskModule,
    NtmSliderDirective,
    UserRegisterComponent
  ],
  declarations: [
    CountdownComponent,
    DeleteConfirmComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    MenuSidenavComponent,
    ScheduleComponent,
    TableDataComponent,
    UserRegisterComponent,
    NtmSliderDirective
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    CrudService
  ],
  entryComponents: [
    DeleteConfirmComponent,
    ForgotPasswordComponent
  ]
})
export class SharedModule { }
