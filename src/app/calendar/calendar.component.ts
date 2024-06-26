import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../services/calendar.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft, heroArrowRight } from '@ng-icons/heroicons/outline';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight,
    }),
  ],
  templateUrl: './calendar.component.html',
  styles: [],
})
export class CalendarComponent {
  constructor(
    public calendar: CalendarService,
    public database: DatabaseService
  ) {}
  ngOnInit() {
    this.calendar.createMonth();
    this.database.items$.subscribe((res) => console.log(res));
  }
}
