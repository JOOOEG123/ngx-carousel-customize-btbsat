import { Component } from "@angular/core";

@Component({
  selector: "register-form",
  templateUrl: "./register-form.component.html",
  styleUrls:['./register-form.component.scss']
})
export class RegisterFormComponent {
  nav = [
    {
      label: 'Employee',
      active: true,
    },
    {
      label: 'Camper',
      active: false,
    },
  ]
  currentTab = this.nav[0]
  ngOnInit() {
  }

  navClick(data){
    for(let k of this.nav){
      k.active = false;
      if(k.label === data){
        k.active = true;
        this.currentTab = k;
      }
    }
  }
}
