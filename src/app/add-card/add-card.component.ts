import { Component, OnInit } from '@angular/core';
import { CardService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

  message: string = ''

  addPost(title: string, author: string, description: string, image: string, source: string, date:any) {

    console.log('Adding employee... ', { title, author, description, image, source, date })

    this.cardService.addPost({ title, author, description, image, source,date });

    this.message = "Successfully added card!"

    console.log(this.cardService.cards);

  }



  constructor(public cardService: CardService) { }

  today: Date = new Date();
  ngOnInit(): void {
  }
}