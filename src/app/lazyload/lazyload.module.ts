import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload.component';
import { SharedModule} from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LazyloadComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadComponent]
})
export class LazyloadModule { }
