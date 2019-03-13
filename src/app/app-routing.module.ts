import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main-tabs', loadChildren: './main-tabs/main-tabs.module#MainTabsPageModule' },
  { path: 'sub-tab', loadChildren: './sub-tab/sub-tab.module#SubTabPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'sub-tab1', loadChildren: './sub-tab1/sub-tab1.module#SubTab1PageModule' },
  { path: 'sub-tab2', loadChildren: './sub-tab2/sub-tab2.module#SubTab2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
