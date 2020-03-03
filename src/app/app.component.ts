import { Component } from '@angular/core';

import { appList } from './app-list.const';
import { App } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public apps: App[] = appList;
}
