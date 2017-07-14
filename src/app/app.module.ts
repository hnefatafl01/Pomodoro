import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdGridListModule } from '@angular/material';
import { AppService } from './app.service';
import { TimerComponent } from './timer/timer.component';
import {MdProgressSpinnerModule} from '@angular/material';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdProgressSpinnerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
