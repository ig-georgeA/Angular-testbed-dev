import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDividerModule, IgxAvatarModule, IgxCalendarModule } from '@infragistics/igniteui-angular';
import { CardCalendarComponent } from './card-calendar.component';

describe('CardCalendarComponent', () => {
  let component: CardCalendarComponent;
  let fixture: ComponentFixture<CardCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCalendarComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDividerModule, IgxAvatarModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
