import { Component, OnInit,Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  @Input() inputSideNav: MatSidenav;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.router.navigate(['user'])

  }

}
