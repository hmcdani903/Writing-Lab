import { Component, OnInit } from '@angular/core';

// ng chat
import { ChatAdapter, ChatParticipantStatus, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { MyAdapter } from './my-adapter';

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
    // console.log(localStorage.getItem('loadedUsers'));
    let users = JSON.parse(localStorage.getItem('loadedUsers'));
    for(let i = 0; i < users.length; i++){
      // console.log(users[i].id);
      this.loadedUsers.push({
        participantType: ChatParticipantType.User,
        id: users[i].id,
        displayName: users[i].email,
        avatar: users[i].photo,
        status: ChatParticipantStatus.Online
      })
    }
    // console.log(this.loadedUsers);
    this.adapter = new MyAdapter(this.loadedUsers);
  }

  ngOnInit(): void {}
}
