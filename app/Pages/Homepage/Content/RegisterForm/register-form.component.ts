import { Component } from "@angular/core";

@Component({
  selector: "register-form",
  templateUrl: "./register-form.component.html",
  styleUrls:['./register-form.component.scss']
})
export class RegisterFormComponent {
  slides = [];
  ngOnInit() {
    for (let k = 990; k < 1000; k++) {
      this.slides.push(k);
    }
  }
}
