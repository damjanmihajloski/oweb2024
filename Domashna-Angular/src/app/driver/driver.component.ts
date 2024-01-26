import { Component, Input,OnInit,EventEmitter,Output} from '@angular/core';
import { Driver } from '../module/klasa';
import { NgIf,CommonModule,NgStyle } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
  @Input()
  ime: String = ' ';

  @Input()
  vozac: Driver = {} as Driver;

  @Input()
  reden: Number | undefined;

  @Input()
  ngStyle: { [klass: string]: any } | undefined;

  @Output()
  cuci = new EventEmitter<Driver>();

  ngOnInit() {}

  klasi() {
    return { poz: this.vozac.category == 'PRO', 'course-card': true };
  }

  klik() {
    var link = this.vozac.iconUrl;
    window.open(link, '_blank');
    this.cuci.emit(this.vozac);
  }

  colours() {
    return { color: this.vozac.category == 'PRO' ? 'purple': 'initial' };
  }

}
