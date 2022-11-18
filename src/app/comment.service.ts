import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './view-comments/comment';


@Injectable({
  providedIn: 'root'
})

export class CommentService {
  constructor(private http: HttpClient) { }
  comments: Array<Comment> = [];
  fetchComment(postId: number){
    return this.http.get(`http://localhost:8000/posts/${postId}/comments`)    
  }

  addComment(comment: Comment){
    console.log(comment);
    // this.comments.push(comment);
    this.http.post('http://localhost:8000/cards/'+ comment.postId + "/comments",comment)
    .subscribe(res=> console.log(res))
  }

  deleteComment(id: any){
    // this.courses.delete(course);
    this.http.delete('http://localhost:8000/comments/' + id)
    .subscribe(
      data => {
        // this will return a new array of employees after removing the employee given by the id
        // this.fileteredCourses = this._courses.filter(course => course.id !== id);
      })
  }
}