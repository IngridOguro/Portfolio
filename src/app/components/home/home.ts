import { Component } from '@angular/core';
import { Navbar } from '../bootstrap/navbar/navbar';
import { Hero } from '../sections/hero/hero';
import { Experience } from '../sections/experience/experience';
import { Projects } from '../sections/projects/projects';
import { Contact } from '../sections/contact/contact';


@Component({
  selector: 'app-home',
  imports: [Navbar,
    Hero,
    Experience,
    Projects,
    Contact
      ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
