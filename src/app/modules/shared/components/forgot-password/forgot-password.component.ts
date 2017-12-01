import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

/*Services*/
import { AuthenticationService } from './../../services/firebase/authentication.service';

@Component({
  selector: 'bonamondo-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Input() params;
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  forgotPasswordForm: FormGroup;
  isLoading = true;
  msg;
  placeholderToEmail: string;
  submitButton: string;
  titleLanguage: string;
  
  constructor(
    private authentication: AuthenticationService,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private router: Router,
    public mdsnackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.forgotPasswordForm = new FormGroup({
      'field_0_email': new FormControl('', [Validators.email, Validators.required])
    });
  }

  ngOnInit() {
    if(this.data.language == 'pt-br') {
      this.placeholderToEmail = "Seu email";
      this.submitButton = "Enviar link de recuperação";
      this.titleLanguage = "Recuperar Senha";
    }

    if(this.data.language == 'en-us') {
      this.placeholderToEmail = "Your e-mail here";
      this.submitButton = "Send link to recover";
      this.titleLanguage = "Recover Password";
    }
  }
  
  forgotPassword = () => {
    let email;
    
    email = this.forgotPasswordForm.controls['field_0_email'].value;
    
    this.authentication.recoverPasswordEmail(email)
    .then(res => {
      this.msg = res;

      this.mdsnackbar.open(this.msg.message, '', {
        duration: 2000
      });
      
      if(this.msg.cod == "rpe-01") {
        this.router.navigate(['/login']);
      }

      this.dialogRef.close();
    });
  }
}
