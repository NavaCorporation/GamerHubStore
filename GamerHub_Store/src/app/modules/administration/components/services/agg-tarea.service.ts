import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TareaAgregar } from '../models/tareaAgregar';

@Injectable({
  providedIn: 'root'
})
export class AggTareaService {

  private tasks: TareaAgregar[] = [];

  constructor() {}

  addTask(task: TareaAgregar): void {
    this.tasks.push(task);
  }

  getTasks(): TareaAgregar[] {
    return this.tasks;
  }

  getPendingTasksCount2(): number {
    return this.tasks.filter(task => task.status === 'Pendiente').length;
  }

  getNextId(): number {
    return this.tasks.length + 1;
  }

}
