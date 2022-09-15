import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule } from 'igniteui-angular';
import { TabLayoutComponent } from './tab-layout.component';

describe('TabLayoutComponent', () => {
  let component: TabLayoutComponent;
  let fixture: ComponentFixture<TabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLayoutComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
