import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  slides = []
  ngOnInit(){
    for(let k = 1; k< 10; k++){
    this.slides.push(Math.ceil(Math.random() * 100))
    }
  }
}

