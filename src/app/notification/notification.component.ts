import { Component } from '@angular/core';
import { ConnectionRequest } from '../models/connect-request';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  connectionRequests: ConnectionRequest[] = [
    // Sample data
    {
      id: 1,
      fromUserName: 'JohnDoe',
      postTitle: 'Looking for a German Learning Partner',
      language: 'German',
      status: 'pending',
      fromUserId: 0,
      toUserId: 0,
      postId: 0
    },
  ];

  acceptRequest(request: ConnectionRequest): void {
    request.status = 'accepted';
    // Implement backend logic to update the request status
    console.log('Request accepted:', request);
  }

  rejectRequest(request: ConnectionRequest): void {
    request.status = 'rejected';
    // Implement backend logic to update the request status
    console.log('Request rejected:', request);
  }
}
