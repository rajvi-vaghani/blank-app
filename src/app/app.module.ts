import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { StorybookLibraryModule } from 'intergation-storybook-library';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './layout/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StorybookLibraryModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
