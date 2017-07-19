import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdGridListModule, MdProgressSpinnerModule, MdInputModule } from '@angular/material';
import { AppService } from './app.service';
import { TimerComponent } from './timer/timer.component';
import { ProgressComponent } from './progress/progress.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdInputModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
