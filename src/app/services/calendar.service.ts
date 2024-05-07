import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  daysOfWeek = ['Mon', 'Din', 'Mit', 'Don', 'Frei', 'Sam', 'Son'];

  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  header = this.date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  calendarMonth: any[] = [];

  createMonth() {
    const firstDay = new Date(this.year, this.month, 1);
    const firstDayIndex = firstDay.getDay();
    const lastDay = new Date(this.year, this.month + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const numberOfDays = lastDay.getDate();
    for (let x = 2; x <= firstDayIndex; x++) {
      this.calendarMonth.push({ number: '' });
    }
    for (let i = 1; i <= numberOfDays; i++) {
      let currentDate = new Date(this.year, this.month, i);
      currentDate.toDateString();
      let day = { number: i, isCurrentDay: false };

      if (
        currentDate.getFullYear() === new Date().getFullYear() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getDate() === new Date().getDate()
      ) {
        day.isCurrentDay = true;
      }
      this.calendarMonth.push(day);
    }
    for (let x = firstDayIndex; x <= lastDayIndex - 1; x++) {
      this.calendarMonth.push({ number: '' });
    }
    console.log(this.calendarMonth);
  }

  showPreviousMonth() {
    this.calendarMonth = [];

    if (this.month < 0) {
      this.month = 11;
      this.year = this.year - 1;
      this.date.setFullYear(this.year);
    }
    this.month = this.month - 1;
    this.date.setMonth(this.month);

    this.createMonth();
    this.header = this.date.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }
  showNextMonth() {
    this.calendarMonth = [];

    if (this.month > 11) {
      this.month = 0;
      this.year = this.year + 1;
      this.date.setFullYear(this.year);
    }
    this.month = this.month + 1;
    this.date.setMonth(this.month);

    this.createMonth();
    this.header = this.date.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    console.log(this.header);
  }
}
