import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title: string; // 文章标题
  brief: string; // 文章简介
  content: string; // 文章内容
  createAt = new Date(); // 创建日期
  TagOptions = []; // 文章标签
  tagsOfOption: Array<{id: string, name: string}> = [{ id: '001', name: 'html'}, { id: '002', name: 'css'}];
  constructor() {

  }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
