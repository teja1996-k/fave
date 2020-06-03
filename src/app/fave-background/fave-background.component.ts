import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fave-background',
  templateUrl: './fave-background.component.html',
  styleUrls: ['./fave-background.component.scss']
})
export class FaveBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const elem = document.getElementById('target');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }


  }

}
