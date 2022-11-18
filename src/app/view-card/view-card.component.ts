import { Component, OnInit } from '@angular/core';
import { CardService } from '../post.service';
import { Card } from './card';
import { Post } from '../Post';
import { BadgeComponent } from '../badge.component';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.fetchPosts();  
  }

  deleteCard(id: any){

    console.log('deleting card... ',id)
    // let fileteredCourses = courses.filter((course)=>course.id != id)
    this.cardService.deletePost(id);
    console.log(this.cardService.cards);
  }
}
