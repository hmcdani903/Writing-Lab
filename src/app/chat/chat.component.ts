import { Component, OnInit } from '@angular/core';

// Angular Firebase: importing database 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// ng chat
import { ChatAdapter, ChatParticipantStatus, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { MyAdapter } from './my-adapter';
import * as firebase from 'firebase';
import { setTime } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  // ng chat
  currentUserId = JSON.parse(localStorage.getItem('user')).uid;
  loadedUsers: IChatParticipant[] = [];
  adapter: MyAdapter;

  constructor() {
    console.log(localStorage.getItem('loadedUsers'));
  }

  ngOnInit(): void {
  //   try {
  //     let db = firebase.firestore();
  //     db.collection('users').onSnapshot(snap => {
  //       snap.forEach(user => {
  //         this.loadedUsers.push({
  //           participantType: ChatParticipantType.User,
  //           id: user.data().uid,
  //           displayName: user.data().email,
  //           avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
  //           status: ChatParticipantStatus.Online
  //         })
  //       })
  //     })
  //     this.adapter = new MyAdapter(this.loadedUsers);
  //     console.log(this.loadedUsers);
  //   }
  //   catch (error) {
  //     console.log("users could not be loaded");
  //   }
  }
}
