import { Component, OnInit } from '@angular/core';
import { Card } from '../view-card/card';
import { CardService } from '../post.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  

  constructor(public cardService: CardService) { }
  today: Date = new Date();


  ngOnInit(): void {

    this.cardService.fetchPosts();

  }

}
