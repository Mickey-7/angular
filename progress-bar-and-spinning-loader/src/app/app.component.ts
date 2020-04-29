import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loaders-during-http-call-using-interceptor';

  colorSpinner : ThemePalette = 'primary';
  modeSpinner : ProgressSpinnerMode = 'indeterminate';
  valueSpinner = 50;

  colorBar : ThemePalette = 'primary';
  // modeBar ='query';
  modeBar ='indeterminate';
  valueBar = 50;




}
