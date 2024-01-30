import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxSimpleComboModule, IgxDatePickerModule } from '@infragistics/igniteui-angular';
import { PickersComboComponent } from './pickers-combo.component';

describe('PickersComboComponent', () => {
  let component: PickersComboComponent;
  let fixture: ComponentFixture<PickersComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickersComboComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxSimpleComboModule, IgxDatePickerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickersComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
