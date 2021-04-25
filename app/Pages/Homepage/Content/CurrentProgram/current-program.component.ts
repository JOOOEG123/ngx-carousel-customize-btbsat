import { Component } from "@angular/core";
@Component({
  selector: "Current-Program",
  templateUrl: "./current-program.component.html",
  styleUrls: ['./current-program.scss']
})
export class CurrentProgramComponent {
  slides = [];
  ngOnInit() {
    for (let k = 999; k < 1006; k++) {
      this.slides.push(k);
    }
  }
}
