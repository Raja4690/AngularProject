import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './view-card/card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }
  cards: Array<Card> = [];

  fetchPosts() {
    this.http.get('http://localhost:8000/posts')
      .subscribe((res: any) => {
        console.log(res)
        this.cards = res;
      })
  }

  fetchPost(id: string | null) {
    return this.http.get('http://localhost:8000/posts/' + id)
  }

  addPost(card: Card) {
    this.cards.push(card);
    this.http.post('http://localhost:8000/posts', card)
      .subscribe(res => console.log(res))
  }

  deletePost(id: any) {
    // this.courses.delete(course);
    this.http.delete('http://localhost:8000/posts/' + id)
      .subscribe(
        data => {
          // this will return a new array of employees after removing the employee given by the id
          // this.fileteredCourses = this._courses.filter(course => course.id !== id);
        })
  }
}
