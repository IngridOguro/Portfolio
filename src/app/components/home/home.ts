import { Component } from '@angular/core';
import { Navbar } from '../bootstrap/navbar/navbar';
import { Hero } from '../sections/hero/hero';
import { Experience } from '../sections/experience/experience';


@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Experience],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
