import { Component, Input } from '@angular/core';



@Component({

    selector: 'app-badge',

    templateUrl: './badge.component.html'

})

export class BadgeComponent{

    @Input('caption')title: string = "Default"

    count: number = 0



    incrementCount(){

        console.log('incrementing..');

       

      this.count++

    }

}