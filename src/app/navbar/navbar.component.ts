import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDown,
  heroArrowLeftEndOnRectangle,
  heroArrowUp,
  heroCalendarDays,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { ClickedOutsideDirective } from '../directives/clicked-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, ClickedOutsideDirective],
  providers: [
    provideIcons({
      heroArrowDown,
      heroArrowUp,
      heroUser,
      heroCalendarDays,
      heroArrowLeftEndOnRectangle,
    }),
  ],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  isOpen: boolean = false;

  toggleMenu = (): void => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  };
}
