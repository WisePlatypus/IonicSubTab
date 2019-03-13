import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubTabsPage } from './sub-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SubTabsPage,
    children: [
      { path: 'sub-tab1', loadChildren: '../sub-tab1/sub-tab1.module#SubTab1PageModule' },
      { path: 'sub-tab2', loadChildren: '../sub-tab2/sub-tab2.module#SubTab2PageModule' },
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
  declarations: [SubTabsPage]
})
export class SubTabsPageModule {}
