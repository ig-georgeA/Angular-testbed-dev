import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxSnackbarModule, IgxToggleModule, IgxBannerModule, IgxToggleModule } from 'igniteui-angular';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays.component';

describe('DialogsAndOverlaysComponent', () => {
  let component: DialogsAndOverlaysComponent;
  let fixture: ComponentFixture<DialogsAndOverlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsAndOverlaysComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxToggleModule, IgxSnackbarModule, IgxToggleModule, IgxBannerModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsAndOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
