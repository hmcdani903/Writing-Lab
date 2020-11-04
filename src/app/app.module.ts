import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgChatModule } from 'ng-chat';
import { MaterialModule } from './material.module';

// firebase imports 
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Auth service
import { AuthService } from "./shared/services/auth.service";

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MattComponent } from './matt/matt.component';
import { RahimaComponent } from './rahima/rahima.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    ScheduleComponent,
    MattComponent,
    RahimaComponent,
    SignUpComponent,
    AppointmentsComponent,
    PasswordResetComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChatModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
