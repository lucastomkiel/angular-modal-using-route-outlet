import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { ABOUT_ROUTE } from './about.route';

import { SharedModule } from 'src/app/shared/shared.module';

export const modules = [
  CommonModule,
  RouterModule.forRoot(ABOUT_ROUTE),
  SharedModule
];

export const components = [
  AboutComponent
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
export class AboutModule { }
