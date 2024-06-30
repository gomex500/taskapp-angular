import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  tasks: any[] = [];

  constructor(private taskServiceService: TaskServiceService) {}

  ngOnInit(): void {
    this.taskServiceService.getAllTask().subscribe(
      (data) => {
        this.tasks = data;        
      },
      (error) => {
        console.error('Error de petición', error);
      }
    );
  }
}
