import { Component, OnInit } from '@angular/core';

// Angular Firebase: importing database 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// ng chat
import { ChatAdapter } from 'ng-chat';
import { MyAdapter } from './my-adapter';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  title = 'chat app';

    // ng chat
    userId = 999;
    users: Observable<any[]>;

    constructor(db: AngularFirestore) {
      this.users = db.collection('users').valueChanges();
    }

    public adapter: ChatAdapter = new MyAdapter();

  ngOnInit(): void {
  }
}
