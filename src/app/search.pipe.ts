import { Pipe, PipeTransform } from '@angular/core';

import { Card } from './view-card/card';



@Pipe({

  name: 'search'

})

export class SearchPipe implements PipeTransform {



  transform(cards: Array<Card>, ...args: string[]): Array<Card> {

    return cards.filter((crd) => crd.description.startsWith(args[0]));

  }



}