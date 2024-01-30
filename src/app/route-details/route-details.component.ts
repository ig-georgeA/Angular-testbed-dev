import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/ig-northwind-apiv2/customer-dto';
import { ProductDto } from '../models/ig-northwind-apiv2/product-dto';
import { OrderDto } from '../models/ig-northwind-apiv2/order-dto';
import { IGNorthwindAPIv2Service } from '../services/ignorthwind-apiv2.service';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _rCustomerID?: string = 'ALFKI';
  @Input()
  public get rCustomerID(): string | undefined {
    return this._rCustomerID ?? 'ALFKI';
  }
  public set rCustomerID(value: string | undefined) {
    this._rCustomerID = value;
    this.selectedCustomer$.next();
    this.iGNorthwindAPIv2OrderDto$.next();
  }
  public selectedCustomer?: CustomerDto;
  public selectedCustomer$: Subject<void> = new Subject<void>();


  private _varOrderID?: number;
  public get varOrderID(): number | undefined {
    return this._varOrderID;
  }
  public set varOrderID(value: number | undefined) {
    this._varOrderID = value;
    this.iGNorthwindAPIv2ProductDto$.next();
  }
  public singleSelectComboVisible: boolean = false;
  public avatarVisible: boolean = false;
  public iGNorthwindAPIv2OrderDto: OrderDto[] = [];
  public iGNorthwindAPIv2OrderDto$: Subject<void> = new Subject<void>();

  public iGNorthwindAPIv2ProductDto: ProductDto[] = [];
  public iGNorthwindAPIv2ProductDto$: Subject<void> = new Subject<void>();


  constructor(
    private iGNorthwindAPIv2Service: IGNorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.iGNorthwindAPIv2Service.getCustomerDto(this.rCustomerID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.selectedCustomer = data,
      error: (_err: any) => this.selectedCustomer = undefined
    });
    this.selectedCustomer$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.iGNorthwindAPIv2Service.getCustomerDto(this.rCustomerID as any).pipe(take(1)).subscribe({
        next: (data) => this.selectedCustomer = data,
        error: (_err: any) => this.selectedCustomer = undefined
    })});
    this.iGNorthwindAPIv2Service.getOrderDtoList(this.rCustomerID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2OrderDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2OrderDto = []
    });
    this.iGNorthwindAPIv2OrderDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.iGNorthwindAPIv2Service.getOrderDtoList(this.rCustomerID as any).pipe(take(1)).subscribe({
        next: (data) => this.iGNorthwindAPIv2OrderDto = data,
        error: (_err: any) => this.iGNorthwindAPIv2OrderDto = []
    })});
    this.iGNorthwindAPIv2Service.getProductDtoList(this.varOrderID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2ProductDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2ProductDto = []
    });
    this.iGNorthwindAPIv2ProductDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.iGNorthwindAPIv2Service.getProductDtoList(this.varOrderID as any).pipe(take(1)).subscribe({
        next: (data) => this.iGNorthwindAPIv2ProductDto = data,
        error: (_err: any) => this.iGNorthwindAPIv2ProductDto = []
    })});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.selectedCustomer$.complete();
    this.iGNorthwindAPIv2OrderDto$.complete();
    this.iGNorthwindAPIv2ProductDto$.complete();
    this.destroy$.complete();
  }

  public gridRowSelectionChanging(event: IRowSelectionEventArgs) {
    this.varOrderID = event.newSelection?.orderId as number;
  }
}
