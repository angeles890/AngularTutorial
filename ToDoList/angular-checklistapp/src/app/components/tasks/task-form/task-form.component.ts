import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styles: [
  ]
})
export class TaskFormComponent implements OnInit {

  constructor(public service: TasksService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    if(this.service.formData.pkTaskId ==0)
    {
      this.createNewTask(form);
    }
  }

  createNewTask(form:NgForm)
  {
    this.service.createTask().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Reminder Created","Reminder");
      }, 
      err=>{console.log(err)}
    )
  }

  resetForm(form:NgForm)
  {
    //Reset form
    form.form.reset();
    this.service.formData = new Task();
  }
}
