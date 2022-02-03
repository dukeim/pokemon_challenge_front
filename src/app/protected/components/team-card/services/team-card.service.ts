import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class TeamCardService{

  private team: Team = 
    {
      "pokemons": [
          {
              "name": "bulbasaur",
              "stats": [
                  {
                      "base_stat": 45,
                      "stat": {
                          "name": "hp"
                      }
                  },
                  {
                      "base_stat": 49,
                      "stat": {
                          "name": "attack"
                      }
                  },
                  {
                      "base_stat": 49,
                      "stat": {
                          "name": "defense"
                      }
                  },
                  {
                      "base_stat": 65,
                      "stat": {
                          "name": "special-attack"
                      }
                  },
                  {
                      "base_stat": 65,
                      "stat": {
                          "name": "special-defense"
                      }
                  },
                  {
                      "base_stat": 45,
                      "stat": {
                          "name": "speed"
                      }
                  }
              ],
              "types": [
                  {
                      "type": {
                          "name": "grass"
                      }
                  },
                  {
                      "type": {
                          "name": "poison"
                      }
                  }
              ],
              "sprites": {
                  "other": {
                      "home": {
                          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                      }
                  }
              }
          },
          {
              "name": "pikachu",
              "stats": [
                  {
                      "base_stat": 35,
                      "stat": {
                          "name": "hp"
                      }
                  },
                  {
                      "base_stat": 55,
                      "stat": {
                          "name": "attack"
                      }
                  },
                  {
                      "base_stat": 40,
                      "stat": {
                          "name": "defense"
                      }
                  },
                  {
                      "base_stat": 50,
                      "stat": {
                          "name": "special-attack"
                      }
                  },
                  {
                      "base_stat": 50,
                      "stat": {
                          "name": "special-defense"
                      }
                  },
                  {
                      "base_stat": 90,
                      "stat": {
                          "name": "speed"
                      }
                  }
              ],
              "types": [
                  {
                      "type": {
                          "name": "electric"
                      }
                  }
              ],
              "sprites": {
                  "other": {
                      "home": {
                          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
                      }
                  }
              }
          },
          {
              "name": "charmander",
              "stats": [
                  {
                      "base_stat": 39,
                      "stat": {
                          "name": "hp"
                      }
                  },
                  {
                      "base_stat": 52,
                      "stat": {
                          "name": "attack"
                      }
                  },
                  {
                      "base_stat": 43,
                      "stat": {
                          "name": "defense"
                      }
                  },
                  {
                      "base_stat": 60,
                      "stat": {
                          "name": "special-attack"
                      }
                  },
                  {
                      "base_stat": 50,
                      "stat": {
                          "name": "special-defense"
                      }
                  },
                  {
                      "base_stat": 65,
                      "stat": {
                          "name": "speed"
                      }
                  }
              ],
              "types": [
                  {
                      "type": {
                          "name": "fire"
                      }
                  }
              ],
              "sprites": {
                  "other": {
                      "home": {
                          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                      }
                  }
              }
          }
      ]
  }
  private baseUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTeamMembers(): Observable<Team> {
    //return of(this.team);
    const url = `${ this.baseUrl }/team_manager/team`;
    return this.http.get<Team>(url);
  }


}
