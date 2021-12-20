import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {SecondpageComponent} from "./secondpage/secondpage.component";

const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  {
  path: 'main', component: HomePageComponent
}, {path: 'teachers', component: SecondpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[

  ]
})
export class AppRoutingModule { }
