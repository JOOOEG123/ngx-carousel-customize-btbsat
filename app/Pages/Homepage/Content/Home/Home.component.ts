import { Component } from "@angular/core";

@Component({
  selector: "home-main",
  templateUrl: "./Home.component.html",
})
export class HomeComponent {
  slides = [];
  ngOnInit() {
    for (let k = 990; k < 1000; k++) {
      this.slides.push(k);
    }
  }
}
