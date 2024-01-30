import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/ig-northwind-apiv2/customer-dto';
import { OrderDetailDto } from '../models/ig-northwind-apiv2/order-detail-dto';
import { OrderDto } from '../models/ig-northwind-apiv2/order-dto';
import { IGNorthwindAPIv2Service } from '../services/ignorthwind-apiv2.service';

@Component({
  selector: 'app-selection-detail',
  templateUrl: './selection-detail.component.html',
  styleUrls: ['./selection-detail.component.scss']
})
export class SelectionDetailComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _varOrderID?: number = 10248;
  public get varOrderID(): number | undefined {
    return this._varOrderID;
  }
  public set varOrderID(value: number | undefined) {
    this._varOrderID = value;
    this.iGNorthwindAPIv2OrderDetailDto$.next();
  }

  private _varCustomer?: CustomerDto;
  public get varCustomer(): CustomerDto | undefined {
    return this._varCustomer;
  }
  public set varCustomer(value: CustomerDto | undefined) {
    this._varCustomer = value;
    this.iGNorthwindAPIv2OrderDto$.next();
    this.varOrderID = undefined;
  }
  public varCustomerID: string = 'ALFKI';
  public iGNorthwindAPIv2CustomerDto: CustomerDto[] = [];
  public singleSelectComboVisible1: boolean = false;
  public iGNorthwindAPIv2OrderDto: OrderDto[] = [];
  public iGNorthwindAPIv2OrderDto$: Subject<void> = new Subject<void>();

  public iGNorthwindAPIv2OrderDetailDto: OrderDetailDto[] = [];
  public iGNorthwindAPIv2OrderDetailDto$: Subject<void> = new Subject<void>();


  constructor(
    private iGNorthwindAPIv2Service: IGNorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.iGNorthwindAPIv2Service.getCustomerDto('ALFKI').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.varCustomer = data,
      error: (_err: any) => this.varCustomer = undefined
    });
    this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2CustomerDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2CustomerDto = []
    });
    this.iGNorthwindAPIv2Service.getOrderDtoList(this.varCustomer?.customerId as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2OrderDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2OrderDto = []
    });
    this.iGNorthwindAPIv2OrderDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.iGNorthwindAPIv2Service.getOrderDtoList(this.varCustomer?.customerId as any).pipe(take(1)).subscribe({
        next: (data) => this.iGNorthwindAPIv2OrderDto = data,
        error: (_err: any) => this.iGNorthwindAPIv2OrderDto = []
    })});
    this.iGNorthwindAPIv2Service.getOrderDetailDtoList(this.varOrderID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2OrderDetailDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2OrderDetailDto = []
    });
    this.iGNorthwindAPIv2OrderDetailDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.iGNorthwindAPIv2Service.getOrderDetailDtoList(this.varOrderID as any).pipe(take(1)).subscribe({
        next: (data) => this.iGNorthwindAPIv2OrderDetailDto = data,
        error: (_err: any) => this.iGNorthwindAPIv2OrderDetailDto = []
    })});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.iGNorthwindAPIv2OrderDto$.complete();
    this.iGNorthwindAPIv2OrderDetailDto$.complete();
    this.destroy$.complete();
  }

  public listItemClick(item: CustomerDto) {
    this.varCustomer = item as CustomerDto;
  }

  public gridRowSelectionChanging(event: IRowSelectionEventArgs) {
    this.varOrderID = event.newSelection[0]?.orderId as number;
  }
}
