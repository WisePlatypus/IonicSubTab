import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabsPage,
    children: [
      { path: 'sub-tabs', loadChildren: '../sub-tabs/sub-tabs.module#SubTabsPageModule' },
      { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainTabsPage]
})
export class MainTabsPageModule {}
