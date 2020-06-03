import { ConfigService } from './../services/config.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-signup-prompt',
  templateUrl: './signup-prompt.component.html',
  styleUrls: ['./signup-prompt.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupPromptComponent implements OnInit {
  public configImages: object = {};
  public baseUrl: string = '';

  constructor(
    // public config: ConfigService,
    private _bottomSheet: MatBottomSheetRef<SignupPromptComponent>
  ) {}

  ngOnInit(): void {
    // this.getConfigFile();
  }

  // Accessing config.json
  // getConfigFile() {
  //   this.config.returnConfigFile().subscribe((data) => {
  //     console.log(data);

  //     if (data) {
  //       this.configImages = data['images'];
  //       this.baseUrl = this.config.returnEnvironmentUrl();
  //     }
  //   });
  // }

  // Close pop up
  closePrompt() {
    this._bottomSheet.dismiss();
  }
}
