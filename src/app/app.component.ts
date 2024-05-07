import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDown,
  heroArrowLeftEndOnRectangle,
  heroArrowUp,
  heroCalendarDays,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CalendarComponent,
    NgIconComponent,
    ClickedOutsideDirective,
  ],
  providers: [
    provideIcons({
      heroArrowDown,
      heroArrowUp,
      heroUser,
      heroCalendarDays,
      heroArrowLeftEndOnRectangle,
    }),
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shiftapps';
  isOpen = false;
  icon = 'heroArrowDown';
  toggleMenu = () => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  };
  closeMenu = () => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  };
}
