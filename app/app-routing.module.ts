
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutes } from './Pages/Homepage';

const appRoutes: Routes = [
  ...HomeRoutes
]


@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    })
    ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [ RouterModule ],
})
export class AppRoutesModule { 


}

