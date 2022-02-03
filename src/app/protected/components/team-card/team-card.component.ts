import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Pokemon } from './interfaces/types';
import { TeamCardService } from './services/team-card.service';



@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  pokemons : Pokemon[];
  loading  : boolean;

  constructor(private teamCardService: TeamCardService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loading = true;
    this.teamCardService.getTeamMembers()
    .subscribe({ 
      next: res => {
        this.pokemons = res.pokemons;
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
