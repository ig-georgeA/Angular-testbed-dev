import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxAvatarModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { GridWithTemplatesComponent } from './grid-with-templates.component';

describe('GridWithTemplatesComponent', () => {
  let component: GridWithTemplatesComponent;
  let fixture: ComponentFixture<GridWithTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridWithTemplatesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxAvatarModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
