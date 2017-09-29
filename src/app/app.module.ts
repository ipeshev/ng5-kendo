import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';

/**
 * The ResizeSensorModule must be imported with 5.0.0-rc.0, otherwise
 * the compilation fails with:
 *
 *  ERROR in /home/tsonev/tmp/ng5-test1/src/$$_gendir/node_modules/@progress/kendo-angular-inputs/dist/es/slider/slider.component.ngfactory.ts (19,22): Cannot find module '../../../../kendo-angular-resize-sensor/dist/es/resize-sensor.component.ngfactory'.
 *  ERROR in /home/tsonev/tmp/ng5-test1/src/$$_gendir/node_modules/@progress/kendo-angular-inputs/dist/es/switch/switch.component.ngfactory.ts (15,21): Cannot find module '../../../../kendo-angular-resize-sensor/dist/es/resize-sensor.component.ngfactory'.
 *
 */
// import { ResizeSensorModule } from '@progress/kendo-angular-resize-sensor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
