import { Component, signal } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('actividad-modulo-2');

  constructor(private authService: AuthService) {
    this.authService.login();
  }
}