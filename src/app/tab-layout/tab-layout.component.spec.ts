import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { TabLayoutComponent } from './tab-layout.component';

describe('TabLayoutComponent', () => {
  let component: TabLayoutComponent;
  let fixture: ComponentFixture<TabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLayoutComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule, IgxCategoryChartModule ]
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
