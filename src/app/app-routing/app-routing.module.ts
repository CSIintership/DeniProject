import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SpkStarterComponent} from './../starter/spk-starter.component'
import {Sp3kStarterComponent} from './../starter/sp3k-starter.component'
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'sp3k', redirectTo:'starter/sp3k',pathMatch: 'full'},
      {path: 'spk', redirectTo: 'starter/spk',pathMatch: 'full'},
      {path: 'starter/spk', component: SpkStarterComponent},
      {path: 'starter/sp3k', component: Sp3kStarterComponent}

    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
