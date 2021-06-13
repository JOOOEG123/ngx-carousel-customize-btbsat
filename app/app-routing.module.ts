import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeRoutes } from "./Pages/Homepage";

const appRoutes: Routes = [...HomeRoutes];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "enabled",
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  exports: [RouterModule],
})
export class AppRoutesModule {
  constructor() {
    window.onload = () => {
      window.scroll(0, +sessionStorage.getItem("scrollPosition") | 0);
    };
    window.onscroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      console.log(window.screenY)
    };
  }
}
