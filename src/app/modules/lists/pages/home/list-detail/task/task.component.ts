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
  @Input() id: number;
  @Input() isOpened: boolean;
  @Output() taskOpened: EventEmitter<number> = new EventEmitter<number>();

  isEditing = false;
  editing = new BehaviorSubject<boolean>(false);

  constructor() { }

  emitOpen(id: number) {
    this.taskOpened.emit(id);
  }

  completedHandler(date: string) {
    if (!date) {
      this.task.dateCompleted = new Date();
    } else {
      this.task.dateCompleted = null;
    }
  }

}
