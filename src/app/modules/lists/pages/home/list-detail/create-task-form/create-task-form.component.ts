import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit {

  @Input() currentListId: string;

  constructor() { }

  ngOnInit() {
  }

}
