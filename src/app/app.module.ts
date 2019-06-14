import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NG Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App Components
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';

// Shared Modules
import { SharedModule } from './shared/shared.module';

// Modules
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';

export const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  NgbModule,
  AppRouteModule,
  SharedModule,
  HomeModule,
  AboutModule
];

export const components = [
  AppComponent
];

export const providers = [];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
