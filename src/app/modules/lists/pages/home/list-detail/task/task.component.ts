import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IntTask } from '../../../../interfaces/int-task';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit  {

  @Input() task: IntTask;
  @Input() id: number;
  @Input() isOpened: boolean;
  @Output() taskOpened: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitOpen(id: number) {
    this.taskOpened.emit(id);
  }

}
