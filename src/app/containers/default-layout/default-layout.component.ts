import { Component } from '@angular/core';

import { navItems } from './_nav';
import {IconSetService} from "@coreui/icons-angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [IconSetService],

})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
