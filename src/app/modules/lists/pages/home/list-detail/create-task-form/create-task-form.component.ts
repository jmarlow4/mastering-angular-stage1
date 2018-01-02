import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: [
    '../task/task.component.scss',
    './create-task-form.component.scss'
  ]
})
export class CreateTaskFormComponent implements OnInit {

  @Input() currentListId: string;
  @Input() isOpened: boolean;
  @Output() createFormOpened: EventEmitter<string> = new EventEmitter<string>();

  createTaskForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formGroup: FormGroup): void {
    console.log('formGroup value', formGroup.value);
    formGroup.reset();
  }
}
