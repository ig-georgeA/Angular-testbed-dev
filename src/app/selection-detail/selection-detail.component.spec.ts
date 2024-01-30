import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxSimpleComboModule, IgxInputGroupModule, IgxAvatarModule, IgxToggleModule, IgxGridModule, IgxDialogModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { SelectionDetailComponent } from './selection-detail.component';

describe('SelectionDetailComponent', () => {
  let component: SelectionDetailComponent;
  let fixture: ComponentFixture<SelectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionDetailComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxSimpleComboModule, IgxInputGroupModule, IgxAvatarModule, IgxToggleModule, IgxGridModule, IgxDialogModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
