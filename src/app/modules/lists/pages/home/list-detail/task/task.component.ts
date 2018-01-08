import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IntTask } from '../../../../interfaces/int-task';
import { MatAccordion, MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TasksService } from '../../../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {

  @Input() task: IntTask;
  @Input() isOpened: boolean;
  @Output() taskOpened: EventEmitter<string> = new EventEmitter<string>();

  isEditing = false;
  editing = new BehaviorSubject<boolean>(false);

  constructor(
    private _taskService: TasksService,
    public snackbar: MatSnackBar
  ) { }

  emitOpen(id: number) {
    this.taskOpened.emit(this.task.uuid);
  }

  completedHandler(date: string) {
    if (!date) {
      this.task.dateCompleted = new Date();
    } else {
      this.task.dateCompleted = null;
    }
  }

  deleteHandler(taskId: string) {
    this._taskService.deleteTask(taskId);
  }

  saveHandler(task: IntTask, editing: boolean) {
    if (!!task.title && task.title !== '') {
      this.editing.next(editing);
      this._taskService.updateTask(task);
    } else {
      this.snackbar.open(
        'Task title must have a value',
        'dismiss',
        {duration: 4000, extraClasses: ['snackbar-error']});
    }
  }
}
