import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';

import { registrarClick } from '../store/votos.actions';

@Directive({
  selector: '[appTrackClick]',
  standalone: false
})
export class TrackClick implements OnInit, OnDestroy {

  private clickSubscription?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.clickSubscription = fromEvent(
      this.elementRef.nativeElement,
      'click'
    ).subscribe(() => {

      const etiqueta = this.elementRef.nativeElement.getAttribute(
        'data-tracking-tag'
      );

      if (etiqueta) {
        this.store.dispatch(
          registrarClick({
            etiqueta
          })
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription?.unsubscribe();
  }
}