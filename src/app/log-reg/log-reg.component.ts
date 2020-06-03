import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LogRegComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  submitRegisterpage(){
    this.router.navigate(['register'])

  }
  submitLoginpage(){
    this.router.navigate(['login'])
  }

}
