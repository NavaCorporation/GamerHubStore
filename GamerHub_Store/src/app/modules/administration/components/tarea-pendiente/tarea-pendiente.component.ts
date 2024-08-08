import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Tarea } from '../models/tarea';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaAgregar } from '../models/tareaAgregar';
import { AggTareaService } from '../services/agg-tarea.service';

@Component({
  selector: 'app-tarea-pendiente',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './tarea-pendiente.component.html',
  styleUrl: './tarea-pendiente.component.css'
})
export class TareaPendienteComponent {

  taskForm: FormGroup;
  tasks: TareaAgregar[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: AggTareaService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  submitForm(): void {
    if (this.taskForm.valid) {
      const newTask = new TareaAgregar(
        this.taskService.getNextId(),
        this.taskForm.value.title,
        this.taskForm.value.description,
        this.taskForm.value.status
      );
      this.taskService.addTask(newTask);
      this.tasks = this.taskService.getTasks(); // Update the task list
      this.taskForm.reset();
    }
  }



  goBack(): void {
    this.router.navigate(['/dashboard']);  // Navega a la ruta deseada, por ejemplo, '/admin'
  }
}
