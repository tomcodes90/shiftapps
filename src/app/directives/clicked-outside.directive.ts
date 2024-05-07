import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickedOutside]',
  standalone: true,
})
export class ClickedOutsideDirective {
  constructor(private el: ElementRef) {}

  @Output() public clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    console.log(this.el.nativeElement);
    if (!this.el.nativeElement.contains(target)) {
      this.clickedOutside.emit(target);
    }
  }
}
