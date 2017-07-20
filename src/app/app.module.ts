import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdGridListModule } from '@angular/material';
import { MdProgressSpinnerModule, MdInputModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { AppService } from './app.service';
import { DataService } from './services/data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent,
    TasksComponent,
    DashboardComponent
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
    FormsModule,
    MdIconModule,
    FlexLayoutModule,
    HttpModule,
    MdTabsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
