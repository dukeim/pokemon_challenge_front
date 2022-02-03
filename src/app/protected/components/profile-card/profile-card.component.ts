import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ProfileResponse } from './interfaces/ProfileResponse';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profile : ProfileResponse;
  loading : boolean = false;
  constructor(private profileService: ProfileService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loading = true;
    this.profileService.getProfile()
    .subscribe({ 
      next: res => {
        this.profile = res
        this.loading = false;
      },
      error: err =>{
        this.loading = false;
        if (err.status == 403){
          this.alertService.error("Not authorized");
        }else{
          this.alertService.error("Server Error");
        }
      }
    });

  }

}
