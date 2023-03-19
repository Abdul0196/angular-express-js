import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpCompComponent } from './exp-comp-container/exp-comp.component';

const routes: Routes = [
  {
    path: 'one',
    loadComponent: () => import('./one/one.component').then(c => c.OneComponent)
  },
  {
    path: 'two',
    loadComponent: () => import('./two/two.component').then(c => c.TwoComponent)
  },
  {
    path: 'three',
    loadComponent: () => import('./three/three.component').then(c => c.ThreeComponent)
  },
  {
    path: 'express',
    component: ExpCompComponent,
    loadChildren: () => import('./exp-comp-container/exp.routes').then(c => c.express_routes)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
