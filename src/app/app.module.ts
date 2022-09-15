import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule, IgxAvatarModule, IgxExpansionPanelModule, IgxListModule, IgxCheckboxModule, IgxDividerModule, IgxActionStripModule, IgxDateTimeEditorModule, IgxDatePickerModule, IgxChipsModule, IgxSliderModule, IgxButtonGroupModule, IgxSwitchModule, IgxRadioModule, IgxSelectModule, IgxComboModule, IgxToggleModule, IgxDropDownModule, IgxDialogModule, IgxSnackbarModule, IgxBannerModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { DataGridLayoutsComponent } from './data-grid-layouts/data-grid-layouts.component';
import { ChartsComponent } from './charts/charts.component';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';
import { ImageComponent } from './image/image.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    PositionComponent,
    TabLayoutComponent,
    ExpansionPanelsComponent,
    CardCalendarComponent,
    ListsDataComponent,
    DataGridLayoutsComponent,
    ChartsComponent,
    TypeScaleComponent,
    InputsComponent,
    PickersComboComponent,
    DialogsAndOverlaysComponent,
    ImageComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCalendarModule,
    IgxInputGroupModule,
    IgxGridModule,
    FormsModule,
    IgxAvatarModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxCheckboxModule,
    IgxDividerModule,
    IgxActionStripModule,
    IgxCategoryChartModule,
    IgxPieChartModule,
    IgxDateTimeEditorModule,
    IgxDatePickerModule,
    IgxChipsModule,
    IgxSliderModule,
    IgxButtonGroupModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxComboModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxSnackbarModule,
    IgxBannerModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
