export interface ConnectionRequest {
  id: number;
  fromUserId: number;
  toUserId: number;
  fromUserName: string,
  postId: number;
  postTitle: string,
  language: string,
  status: 'pending' | 'accepted' | 'rejected';
}
