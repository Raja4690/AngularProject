import { Component, OnInit } from '@angular/core';

import { CardService } from '../post.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public cardService: CardService) {
  
   }

  ngOnInit(): void {
  }

}
