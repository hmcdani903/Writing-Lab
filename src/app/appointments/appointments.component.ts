import { Component, OnInit } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  // styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  public defaultView : View = 'Month';

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
