import { Component } from '@angular/core';
import { Navbar } from '../bootstrap/navbar/navbar';
import { Hero } from '../sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
