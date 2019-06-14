import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { HOME_ROUTE } from './home.route';

export const modules = [
  CommonModule,
  RouterModule.forRoot(HOME_ROUTE),
];

export const components = [
  HomeComponent
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
  ]
})
export class HomeModule { }
