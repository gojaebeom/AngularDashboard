import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes =
[
  {
    path:'',
    component:DefaultComponent,
    children:
    [
      //dashboards
      { path:'',component:DashboardsComponent },
      
      //posts
      { path:'posts', component:PostsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
