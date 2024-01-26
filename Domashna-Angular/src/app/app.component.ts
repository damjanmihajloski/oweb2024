import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DRIVERS } from '../db-data';
import { Driver } from './module/klasa';
import { DriverComponent } from './driver/driver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Domashna-Angular';
  vozaci = DRIVERS;

  font:any;

  appKlik(suzi:Driver){
    console.log("appKlik Trigered");
  }

}
