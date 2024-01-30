import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { IgxListModule, IgxAvatarModule, IgxGridModule, IgxSimpleComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxChipsModule, IgxActionStripModule, IgxTabsModule, IgxCardModule, IgxCalendarModule, IgxExpansionPanelModule, IgxTreeModule, IgxCheckboxModule, IgxAccordionModule, IgxStepperModule, IgxDividerModule, IgxTreeGridModule, IgxPivotGridModule, IgxDateTimeEditorModule, IgxDatePickerModule, IgxSliderModule, IgcFormsModule, IgxBadgeModule, IgxButtonGroupModule, IgxSwitchModule, IgxRadioModule, IgxSelectModule, IgxComboModule, IgxBannerModule, IgxDropDownModule, IgxSnackbarModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { IgxFinancialChartModule, IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { SelectionDetailComponent } from './selection-detail/selection-detail.component';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { GridCRUDComponent } from './grid-crud/grid-crud.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree/expansion-panels-tree.component';
import { StepperComponent } from './stepper/stepper.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { GridAndTreeGridComponent } from './grid-and-tree-grid/grid-and-tree-grid.component';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';
import { CategoryChartsComponent } from './category-charts/category-charts.component';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndDropdownsComponent } from './dialogs-and-dropdowns/dialogs-and-dropdowns.component';
import { ImageComponent } from './image/image.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FinancialChartComponent,
    DynamicRoutingComponent,
    RouteDetailsComponent,
    SelectionDetailComponent,
    GridWithTemplatesComponent,
    GridCRUDComponent,
    LayoutsComponent,
    PositionComponent,
    TabLayoutComponent,
    ExpansionPanelsTreeComponent,
    StepperComponent,
    CardCalendarComponent,
    ListsDataComponent,
    GridAndTreeGridComponent,
    PivotGridComponent,
    CategoryChartsComponent,
    TypeScaleComponent,
    InputsComponent,
    PickersComboComponent,
    DialogsAndDropdownsComponent,
    ImageComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxFinancialChartModule,
    FormsModule,
    IgxGridModule,
    IgxSimpleComboModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    IgxDialogModule,
    IgxChipsModule,
    IgxActionStripModule,
    IgxTabsModule,
    IgxCardModule,
    IgxCalendarModule,
    IgxCategoryChartModule,
    IgxExpansionPanelModule,
    IgxTreeModule,
    IgxCheckboxModule,
    IgxAccordionModule,
    IgxStepperModule,
    IgxDividerModule,
    IgxTreeGridModule,
    IgxPivotGridModule,
    IgxPieChartModule,
    IgxDateTimeEditorModule,
    IgxDatePickerModule,
    IgxSliderModule,
    IgcFormsModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxComboModule,
    IgxBannerModule,
    IgxDropDownModule,
    IgxSnackbarModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
