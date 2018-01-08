import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntTask } from '../../../../interfaces/int-task';
import { TasksService } from '../../../../services/tasks.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: [
    '../task/task.component.scss',
    './create-task-form.component.scss'
  ]
})
export class CreateTaskFormComponent {

  @Input() currentListId: string;
  @Input() isOpened: boolean;
  @Output() createFormOpened: EventEmitter<string> = new EventEmitter<string>();

  createTaskForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor(
    private _tasksService: TasksService,
    public snackbar: MatSnackBar
  ) { }

  onSubmit(formGroup: FormGroup): void {
    const task: IntTask = formGroup.value;
    if (!!task.title && task.title !== '') {
      task.listId = this.currentListId;
      this._tasksService.createTask(task);
      this.isOpened = false;
      formGroup.reset();
    } else {
      this.snackbar.open(
        'Task title must have a value',
        'dismiss',
        {duration: 4000, extraClasses: ['snackbar-error']});
    }
  }
}
