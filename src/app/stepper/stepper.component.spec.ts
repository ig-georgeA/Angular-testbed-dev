import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxStepperModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxStepperModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
