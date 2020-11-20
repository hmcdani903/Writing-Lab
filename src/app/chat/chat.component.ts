import { Component, OnInit } from '@angular/core';

// ng chat
import { ChatParticipantStatus, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { AuthService } from '../shared/services/auth.service';
import { MyAdapter } from './my-adapter';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  // ng chat
  currentUserId;
  loadedUsers: IChatParticipant[] = [];
  adapter: MyAdapter;

  constructor(public authService: AuthService) {
    this.currentUserId = authService.isLoggedIn ? JSON.parse(localStorage.getItem('user')).uid : 999;

    let users = JSON.parse(localStorage.getItem('loadedUsers'));
    for(let i = 0; i < users.length; i++){
      this.loadedUsers.push({
        participantType: ChatParticipantType.User,
        id: users[i].id,
        displayName: users[i].email,
        avatar: users[i].photo,
        status: ChatParticipantStatus.Online
      })
    }
    this.adapter = new MyAdapter(this.loadedUsers);
  }

  ngOnInit(): void {}
}
