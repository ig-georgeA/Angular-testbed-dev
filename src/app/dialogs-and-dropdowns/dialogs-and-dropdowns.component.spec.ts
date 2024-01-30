import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxBannerModule, IgxDropDownModule, IgxInputGroupModule, IgxDialogModule, IgxSnackbarModule } from '@infragistics/igniteui-angular';
import { DialogsAndDropdownsComponent } from './dialogs-and-dropdowns.component';

describe('DialogsAndDropdownsComponent', () => {
  let component: DialogsAndDropdownsComponent;
  let fixture: ComponentFixture<DialogsAndDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsAndDropdownsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxBannerModule, IgxDropDownModule, IgxInputGroupModule, IgxDialogModule, IgxSnackbarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsAndDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
