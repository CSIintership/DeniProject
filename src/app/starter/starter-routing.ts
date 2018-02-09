import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sp3kStarterComponent } from './sp3k-starter.component';
import { SpkStarterComponent} from './spk-starter.component'
@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '',
            component: StarterComponent,
            children: [
              {
                path: 'spk',
                component: SpkStarterComponent,

              }
            ]
          }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class StarterRoutingModule { }
