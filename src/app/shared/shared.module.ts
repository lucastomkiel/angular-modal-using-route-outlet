import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modal Components
import { ModalComponent } from '../modules/modal/modal.component';
import { ModalHeaderComponent, ModalFooterComponent, ModalContentComponent } from './modal';

// Info Components
import { InfoComponent } from '../modules/info/info.component';

export const modules = [
  RouterModule
];

export const components = [
  InfoComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  ModalContentComponent
];

export const directives = [];

export const providers = [];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
    ...directives
  ],
  providers: [
    ...providers
  ],
  entryComponents: [],
  exports: [
    ...components
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
