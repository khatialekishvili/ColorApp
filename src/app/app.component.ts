import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorsListComponent } from "./colors-list/colors-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ColorsListComponent,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'colors-app';
}
