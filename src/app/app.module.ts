import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  exports: [ChartsModule],
  declarations: [AppComponent, ResumeComponent, ExpandDetailsComponent, RightDetailsPanelComponent,
    ResumeResponsiveComponent, BubbleProgressComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

