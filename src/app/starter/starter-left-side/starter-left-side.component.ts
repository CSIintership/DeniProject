import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap , RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})
export class StarterLeftSideComponent implements OnInit {

  constructor(private router:Router) { }

  goTo(route){
  this.router.navigate(['starter/'+route]);
  }
  ngOnInit() {
  }

}
