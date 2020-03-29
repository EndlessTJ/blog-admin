import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewsComponent } from './views/views.component';


@NgModule({
  declarations: [ ViewsComponent, EditComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ]
})
export class ArticleModule { }
