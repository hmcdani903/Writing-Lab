import * as firebase from 'firebase';
import { ChatAdapter, IChatGroupAdapter, Group, Message, ChatParticipantStatus, ParticipantResponse, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { environment } from '../../environments/environment';

firebase.initializeApp(environment.firebase);
const db = firebase.firestore();
const mockUsers: IChatParticipant[] = [
  {
    participantType: ChatParticipantType.User,
    id: 1,
    displayName: "Arya Stark",
    avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
    status: ChatParticipantStatus.Online
  },
  {
    participantType: ChatParticipantType.User,
    id: 2,
    displayName: "Cersei Lannister",
    avatar: null,
    status: ChatParticipantStatus.Online
  },
  {
    participantType: ChatParticipantType.User,
    id: 3,
    displayName: "Daenerys Targaryen",
    avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
    status: ChatParticipantStatus.Busy
  },
  {
    participantType: ChatParticipantType.User,
    id: 4,
    displayName: "Eddard Stark",
    avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
    status: ChatParticipantStatus.Offline
  },
  {
    participantType: ChatParticipantType.User,
    id: 5,
    displayName: "Hodor",
    avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
    status: ChatParticipantStatus.Offline
  },
  {
    participantType: ChatParticipantType.User,
    id: 6,
    displayName: "Jaime Lannister",
    avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
    status: ChatParticipantStatus.Busy
  },
  {
    participantType: ChatParticipantType.User,
    id: 7,
    displayName: "John Snow",
    avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
    status: ChatParticipantStatus.Busy
  },
  {
    participantType: ChatParticipantType.User,
    id: 8,
    displayName: "Lorde Petyr 'Littlefinger' Baelish",
    avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
    status: ChatParticipantStatus.Offline
  },
  {
    participantType: ChatParticipantType.User,
    id: 9,
    displayName: "Sansa Stark",
    avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
    status: ChatParticipantStatus.Online
  },
  {
    participantType: ChatParticipantType.User,
    id: 10,
    displayName: "Theon Greyjoy",
    avatar: "https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg",
    status: ChatParticipantStatus.Away
  }
];

export class MyAdapter extends ChatAdapter implements IChatGroupAdapter {
  public static mockedParticipants: IChatParticipant[] = mockUsers;
  public setUsers(users: IChatParticipant[]) {
    MyAdapter.mockedParticipants = users;
  }

  constructor(users) {
    super();
    MyAdapter.mockedParticipants = users;
  }

  // DISPLAY USERS
  listFriends(): Observable<ParticipantResponse[]> {

    return of(MyAdapter.mockedParticipants.map(user => {
      let participantResponse = new ParticipantResponse();
      participantResponse.participant = user;
      participantResponse.metadata = {
        totalUnreadMessages: Math.floor(Math.random() * 10)
      }
      return participantResponse;
    }));
  }

  /* GET MESSAGES */
  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message> = [];
    let currentUser = JSON.parse(localStorage.getItem('user'));

    let messages = JSON.parse(localStorage.getItem('loadedMessages'));
    for(let i = 0; i < messages.length; i++){
      if(messages[i].to == currentUser.uid && messages[i].from == destinataryId){
        mockedHistory.push({
          fromId: messages[i].from,
          toId: messages[i].to,
          message: messages[i].message,
          dateSent: new Date()
        })
      }
    }
    return of(mockedHistory).pipe(delay(2000));
  }

  /* SEND MESSAGES TO FIREBASE */
  sendMessage(message: Message): void {
    setTimeout(() => {
      let currentUser = JSON.parse(localStorage.getItem('user'));
      db.collection("chat").add({
        from: currentUser.uid,
        to: message.toId,
        message: message.message,
        time: new Date()
      }).then(res => {
        localStorage.setItem("recentMessageId", res.id);
      });
    }, 1000);
    localStorage.setItem("recentMessage", message.message);

  }

  groupCreated(group: Group): void {
    console.log("groupCreated() works");
    MyAdapter.mockedParticipants.push(group);

    MyAdapter.mockedParticipants = MyAdapter.mockedParticipants.sort((first, second) =>
      second.displayName > first.displayName ? -1 : 1
    );

    /* Trigger update of friends list */
    this.listFriends().subscribe(response => {
      this.onFriendsListChanged(response);
    });
  }
}
