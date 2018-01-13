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

  emitOpen(id: string) {
    this.taskOpened.emit(this.task.uuid);
  }

  completedHandler(date: Date | string) {
    if (!date) {
      this.task.dateCompleted = new Date();
      this._taskService.updateTask(this.task);
    } else {
      this.task.dateCompleted = null;
      this._taskService.updateTask(this.task);
    }
  }

  deleteHandler() {
    this._taskService.deleteTask(this.task.uuid);
  }

  saveHandler(editing: boolean) {
    if (!!this.task.title && this.task.title !== '') {
      this.editing.next(editing);
      this._taskService.updateTask(this.task);
    } else {
      this.snackbar.open(
        'Task title must have a value',
        'dismiss',
        {duration: 4000, extraClasses: ['snackbar-error']});
    }
  }

  handleClose() {
    this.editing.next(false);
    this.isOpened = false;
  }

  handleOpen() {
    this.emitOpen(this.task.uuid);
    this.isOpened = true;
  }
}
