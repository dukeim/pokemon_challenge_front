import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementTypePipe } from './components/team-card/pipes/element-type.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    TeamCardComponent,
    ProfileCardComponent,
    ElementTypePipe
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    NgbModule
  ]
})
export class ProtectedModule { }
