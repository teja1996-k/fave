import { SignupPromptComponent } from './../signup-prompt/signup-prompt.component';
import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.openBottomSheet();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(SignupPromptComponent, {
      panelClass: 'signup-prompt',
    });
  }
}
