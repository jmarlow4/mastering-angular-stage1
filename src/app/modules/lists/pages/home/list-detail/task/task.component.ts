import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IntTask } from '../../../../interfaces/int-task';
import { MatAccordion } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

  constructor() { }

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

}
