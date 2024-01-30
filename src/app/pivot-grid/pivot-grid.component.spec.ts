import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxPivotGridModule } from '@infragistics/igniteui-angular';
import { PivotGridComponent } from './pivot-grid.component';

describe('PivotGridComponent', () => {
  let component: PivotGridComponent;
  let fixture: ComponentFixture<PivotGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotGridComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxPivotGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
