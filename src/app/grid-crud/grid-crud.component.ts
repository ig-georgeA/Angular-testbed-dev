import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/ig-northwind-apiv2/customer-dto';
import { IGNorthwindAPIv2Service } from '../services/ignorthwind-apiv2.service';

@Component({
  selector: 'app-grid-crud',
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCRUDComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public iGNorthwindAPIv2CustomerDto: CustomerDto[] = [];

  constructor(
    private iGNorthwindAPIv2Service: IGNorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2CustomerDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2CustomerDto = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public customersRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.iGNorthwindAPIv2Service.putCustomerDto(args.rowData).pipe(takeUntil(this.destroy$)).subscribe({
        next: (_e) => {
          this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.iGNorthwindAPIv2CustomerDto = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }

  public customersRowDeleted(args: IRowDataEventArgs) {
    this.iGNorthwindAPIv2Service.deleteCustomerDto(args.primaryKey).pipe(takeUntil(this.destroy$)).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.iGNorthwindAPIv2CustomerDto = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public customersRowAdded(args: IRowDataEventArgs) {
    this.iGNorthwindAPIv2Service.postCustomerDto(args.data).pipe(takeUntil(this.destroy$)).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.iGNorthwindAPIv2CustomerDto = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }
}
