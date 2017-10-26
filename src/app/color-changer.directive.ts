import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {
  @Output() itch: EventEmitter<any> = new EventEmitter();
  @Input('appColorChanger') dynamicColor: string;
  @Input() defaultValue: string;
  constructor(private elRef: ElementRef) {
  }
  // @HostListener('mouseover') onMouseOver() {
  //   this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.changeBackgroundColor('');
  // }
  @HostListener('click') onClick() {
    this.itch.emit();
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
