import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DynamicState } from '../enums/dynamic-state.enum';
import { StaticState } from '../enums/static-state.enum';

export class StateUi implements OnChanges {
  @Input() dynamicState: DynamicState;
  @Input() staticState: StaticState;
  @Output() MouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() MouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() Click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() Blur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(
    public el: ElementRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dynamicState) {
      this.switchDynamicState(changes.dynamicState.currentValue);
    }
    if (changes.staticState) {
      this.switchStaticState(changes.staticState.currentValue);
    }
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e) {
    this.switchDynamicState(DynamicState.hover);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    if (this.dynamicState !== DynamicState.select) {
      this.switchDynamicState();
    }
  }

  @HostListener('click', ['$event']) onClick(e) {
    this.switchDynamicState(DynamicState.select);
  }

  // Use document click instead of blur, because is universal
  @HostListener('document:click', ['$event']) clickout(e) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.switchDynamicState();
    }
  }

  public switchDynamicState(state?: DynamicState) {
    if (this.dynamicState) {
      this.el.nativeElement.classList.remove(this.dynamicState);
    }
    this.dynamicState = state;
    if (state) {
      this.el.nativeElement.classList.add(state);
    }
  }

  public switchStaticState(state?: StaticState) {
    if (this.staticState) {
      this.el.nativeElement.classList.remove(this.staticState);
    }
    this.staticState = state;
    if (state) {
      this.el.nativeElement.classList.add(state);
    }
  }
}
