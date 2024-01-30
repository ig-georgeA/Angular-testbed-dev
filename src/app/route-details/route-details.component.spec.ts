import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSimpleComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxGridModule, IgxDialogModule, IgxListModule } from '@infragistics/igniteui-angular';
import { RouteDetailsComponent } from './route-details.component';

describe('RouteDetailsComponent', () => {
  let component: RouteDetailsComponent;
  let fixture: ComponentFixture<RouteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDetailsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSimpleComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxGridModule, IgxDialogModule, IgxListModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
