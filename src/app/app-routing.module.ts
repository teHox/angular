import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';

const routes: Routes = [
  {path:'new-form', component: NewFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
