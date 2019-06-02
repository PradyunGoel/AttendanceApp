import { Component } from '@angular/core';

import { OtherPage } from '../other/other';
import { AttendancePage } from '../attendance/attendance';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AttendancePage;
  tab2Root = OtherPage;

  constructor() {

  }
}
