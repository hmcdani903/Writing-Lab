import { Component, OnInit } from '@angular/core';

// Angular Firebase: importing database 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Calendar 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  students: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.students = db.collection('students').valueChanges();
  }

  ngOnInit(): void {
  }

}
