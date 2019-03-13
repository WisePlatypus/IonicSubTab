import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main-tabs', pathMatch: 'full' },
  { path: 'main-tabs', loadChildren: './main-tabs/main-tabs.module#MainTabsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
