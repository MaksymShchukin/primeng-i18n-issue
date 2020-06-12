import { Component } from '@angular/core';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: SelectItem[] = [{ label: 'Blue', value: 1 }, { label: 'Green', value: 2 }, { label: 'Red', value: 3 }];
}
