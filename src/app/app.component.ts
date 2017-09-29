import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-config">
        <input id="ac" type="checkbox" [(ngModel)]="autoCorrect">
        <label for="ac">Auto-correct value to be between min and max</label>
      </div>
      <kendo-numerictextbox
          [value]="value" [min]="0" [max]="100" [autoCorrect]="autoCorrect">
      </kendo-numerictextbox>
      <kendo-maskedtextbox mask="(999) 000-00-00-00"></kendo-maskedtextbox>
  `
})
export class AppComponent {
    public autoCorrect: boolean = false;
    public value: number = 5;
}
