import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainDashboardPasswordGeneratorComponent } from './main-dashboard-password-generator/main-dashboard-password-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardPasswordGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
