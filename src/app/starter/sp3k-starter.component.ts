import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-starter',
  styleUrls: ['./starter.component.css'],
  template:  `
  <div class="wrapper">
  <!-- Main Header -->
 <app-starter-header></app-starter-header>
 <!-- Left side column. contains the logo and sidebar -->
 <app-starter-left-side></app-starter-left-side>
 <!-- Content Wrapper. Contains page content -->
 <app-startersp3k-content></app-startersp3k-content>
 <!-- /.content-wrapper -->
 <!-- Main Footer -->
 <app-starter-footer></app-starter-footer>
 <!-- Control Sidebar -->
 <app-starter-control-sidebar></app-starter-control-sidebar>
 <!-- /.control-sidebar -->
 <!-- Add the sidebar's background. This div must be placed
      immediately after the control sidebar -->
 <div class="control-sidebar-bg"></div>
</div>
  `
})
export class Sp3kStarterComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
