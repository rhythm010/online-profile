import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';

import { ExpandDetailsComponent } from './resume/expand-details/expand-details.component';
import { RightDetailsPanelComponent } from './resume/right-details-panel/right-details-panel.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResumeResponsiveComponent } from './resume-responsive/resume-responsive.component';
import { BubbleProgressComponent } from './resume/bubble-progress/bubble-progress.component';
import { LoginComponent } from './jwd_work/login/login.component';
import { HomeComponent } from './jwd_work/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ThemeService],
  exports: [ChartsModule],
  declarations: [AppComponent, ResumeComponent, ExpandDetailsComponent, RightDetailsPanelComponent,
    ResumeResponsiveComponent, BubbleProgressComponent, HomeComponent, LoginComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

