import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  form:  FormGroup;
  submitted = false;
  
  constructor(private formBuilder : FormBuilder,
              private router:Router,
              private alertService: AlertService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() {return this.form.controls; }
  
  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    if (this.form.invalid) {
     return;
    }
    this.loading = true;
    this.authService.signup( this.f.username.value,  this.f.email.value, this.f.password.value)
     .subscribe( resp => {
       if(resp === "Ok"){
         this.alertService.success('Registration successful', { keepAfterRouteChange: true });
         this.router.navigate(['/auth/login']);
         //this.router.navigateByUrl('/auth/login');
       }else{
         this.alertService.error(resp);
         this.loading = false;
       }
     });
  }

}
