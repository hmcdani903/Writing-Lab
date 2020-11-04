import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChatComponent } from './chat/chat.component';


import { MattComponent } from './matt/matt.component';
import { RahimaComponent } from './rahima/rahima.component';

import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'scheduler', component: ScheduleComponent },
  { path: 'appointments', component: AppointmentsComponent },

  { path: 'Matt', component: MattComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'Rahima', component: RahimaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
