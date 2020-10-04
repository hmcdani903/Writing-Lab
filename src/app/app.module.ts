import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { CassieComponent } from './cassie/cassie.component';
import { KaitlynComponent } from './kaitlyn/kaitlyn.component';
import { RahimaComponent } from './rahima/rahima.component';
import { SelectorComponent } from './selector/selector.component';

// firebase imports 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

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
    CassieComponent,
    KaitlynComponent,
    RahimaComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
