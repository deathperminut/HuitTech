import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
// PRIMERO IMPORTAMOS LOS COMPONENTES CORRESPONDIENTES\\
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { NewsComponent } from 'src/app/pages/news/news.component';
import { OurTeamComponent } from 'src/app/pages/our-team/our-team.component';
import {PioneersComponent} from "src/app/pages/pioneers/pioneers.component"
//////////////////////////////////////////////////////////////////////////////

// ARMAMOS LAS RUTAS CORRESPONDIENTES
const app_routes:Routes=[
   {path:"home",component:HomeComponent},
   {path:"about",component:AboutComponent},
   {path:"news",component:NewsComponent},
   {path:"OurTeam",component:OurTeamComponent},
   {path:"Pioneers",component:PioneersComponent},
   {path:"**",pathMatch:"full",redirectTo:"home"}

];
export const app_routing=RouterModule.forRoot(app_routes)