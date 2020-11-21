import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { View } from '@syncfusion/ej2-angular-schedule';
import { Observable } from 'rxjs';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
})
export class AppointmentsComponent implements OnInit {
  availableDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  selectedDay = "Monday";
  facultyColor = "orange";
  faculty: Observable<any[]>;

  public defaultView : View = 'Month';

  constructor(
    public authService: AuthService,
    db: AngularFirestore
  ) {
    this.faculty = db.collection('faculty').valueChanges();
  }

  ngOnInit(): void {
  }
}
