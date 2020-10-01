import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { MattComponent } from './matt/matt.component';
import { KaitlynComponent } from './kaitlyn/kaitlyn.component';
import { CassieComponent } from './cassie/cassie.component';
import { RahimaComponent } from './rahima/rahima.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'scheduler', component: ScheduleComponent },

  { path: 'Matt', component: MattComponent },
  { path: 'Kaitlyn', component: KaitlynComponent },
  { path: 'Cassie', component: CassieComponent },
  { path: 'Rahima', component: RahimaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
