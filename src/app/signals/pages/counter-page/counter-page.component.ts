import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: ``
})
export class CounterPageComponent {

  public counter = signal(10);

  //computed() es de solo lectura
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value: number ){
    this.counter.update( current => current + value );
  }

}
