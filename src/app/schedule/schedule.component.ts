import { Component, OnInit } from '@angular/core';

// Angular Firebase: importing database 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  availableDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  selectedDay = "Monday";

  facultyColor = "orange";
  faculty: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.faculty = db.collection('faculty').valueChanges();
  }

  ngOnInit(): void {
  }

}
