import { Component, Input, OnInit } from '@angular/core';

import { CommentService } from '../comment.service';

import { Comment } from '../view-comments/comment';

import { Card } from '../view-card/card';




@Component({

  selector: 'app-view-comments',

  templateUrl: './view-comments.component.html',

  styleUrls: ['./view-comments.component.css']

})

export class ViewCommentsComponent implements OnInit {

  @Input('postId') postId: number = 0;

  comments : Array<any> = []



  constructor(public commentService: CommentService) { }



  ngOnInit(): void {

    this.commentService.fetchComment(this.postId)

    .subscribe((res:any) => {

      console.log(res)

      this.comments = res;

    })

  }



  addComment(comment: string){

    console.log('Adding comment... ', {comment})

    this.commentService.addComment({
      comment,
      postId: this.postId
    });

    console.log(this.commentService.comments);

   

  }



}