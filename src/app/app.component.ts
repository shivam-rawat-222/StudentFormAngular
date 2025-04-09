import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { StudentFormComponent } from './StudentForm/StudentForm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentform';

  constructor(private router : Router,){

  }

  routeToForm(){
    this.router.navigate(['studentForm'])

  }
}
