import { Component } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  public date: Date = new Date('2021-03-01T00:00');
  public date1: Date = new Date('2021-03-27T00:00');
  public date2: Date = new Date('2021-03-16T00:00');
  public value: number = 50;
  public value1: any = { lower: 20, upper: 80 };
  public value2: number = 0;
  public value3: string = 'some content';
  public checked: boolean = true;
}
