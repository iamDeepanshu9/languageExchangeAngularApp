import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionRequest } from 'src/app/models/connect-request';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {

  constructor(private router: Router){

  }
  posts = [
    {
      title: 'Looking for a Spanish Conversation Partner',
      content: 'I am an intermediate Spanish learner...',
      author: 'JaneDoe123',
    },
    // Add more posts here
  ];
  sendRequest(post: any): void {
    const newRequest: ConnectionRequest = {
      id: Math.random(),
      fromUserName: 'JohnDoe',// This should be generated in a more reliable way or by the backend
      fromUserId: 1, // This should be the current user's ID
      toUserId: post.authorId,
      postId: post.id,
      status: 'pending',
      postTitle: 'Looking for a German Learning Partner',
      language: 'German',
    };

    console.log('Request sent:', newRequest);
    // Implement logic to handle the connection request, e.g., send to backend
  }
  notification(){
    this.router.navigate(['notification']);
  }
}
