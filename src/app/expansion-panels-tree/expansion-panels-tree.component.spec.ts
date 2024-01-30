import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule, IgxListModule, IgxTreeModule, IgxInputGroupModule, IgxCheckboxModule, IgxAccordionModule } from '@infragistics/igniteui-angular';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree.component';

describe('ExpansionPanelsTreeComponent', () => {
  let component: ExpansionPanelsTreeComponent;
  let fixture: ComponentFixture<ExpansionPanelsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelsTreeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule, IgxListModule, IgxTreeModule, IgxInputGroupModule, IgxCheckboxModule, IgxAccordionModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
