import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewsComponent } from './views/views.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'views',
  },
  {
    path: 'views',
    component: ViewsComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
