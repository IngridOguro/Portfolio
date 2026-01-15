import { Component } from '@angular/core';
import { Project } from '../../my-components/project/project';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
