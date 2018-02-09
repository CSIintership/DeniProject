import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { DataTableModule } from './data-table';
import { SpkStarterComponent} from './starter/spk-starter.component';
import {Sp3kStarterComponent} from './starter/sp3k-starter.component';
import {StarterSpkContentComponent} from './starter/starterspk-content/starterspk-content.component'
import { StarterSp3kContentComponent } from './starter/startersp3k-content/startersp3k-content.component';


@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    SpkStarterComponent,
    Sp3kStarterComponent,
    StarterSpkContentComponent,
    StarterSp3kContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
