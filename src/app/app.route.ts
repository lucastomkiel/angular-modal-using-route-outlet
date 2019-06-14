import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ModalComponent } from './modules/modal/modal.component';
import { InfoComponent } from './modules/info/info.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'modal',
    component: ModalComponent,
    outlet: 'modal',
  }, {
    path: 'info',
    component: InfoComponent,
    outlet: 'modal',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouteModule {}
