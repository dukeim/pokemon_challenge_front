import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading   : boolean = false;
  form      : FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder : FormBuilder, 
              private router:Router,
              private authService: AuthService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get f() { return this.form.controls; }

   onSubmit() {
     this.submitted = true;
     // reset alerts on submit
     this.alertService.clear();

     if (this.form.invalid) {
      return;
     }
     this.loading = true;
     this.authService.login( this.f.username.value, this.f.password.value)
      .subscribe( resp => {
        if(resp === "Ok"){
          this.router.navigateByUrl('/home');
        }else{
          this.alertService.error(resp);
          this.loading = false;
        }
      });
   }

}
