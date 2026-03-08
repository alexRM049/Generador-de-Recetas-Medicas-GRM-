import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
