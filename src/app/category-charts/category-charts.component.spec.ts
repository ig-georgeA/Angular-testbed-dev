import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { CategoryChartsComponent } from './category-charts.component';

describe('CategoryChartsComponent', () => {
  let component: CategoryChartsComponent;
  let fixture: ComponentFixture<CategoryChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryChartsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCategoryChartModule, IgxPieChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
