import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/ig-northwind-apiv2/customer-dto';
import { EmployeeDto } from '../models/ig-northwind-apiv2/employee-dto';
import { IGNorthwindAPIv2Service } from '../services/ignorthwind-apiv2.service';

@Component({
  selector: 'app-grid-and-tree-grid',
  templateUrl: './grid-and-tree-grid.component.html',
  styleUrls: ['./grid-and-tree-grid.component.scss']
})
export class GridAndTreeGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public iGNorthwindAPIv2CustomerDto: CustomerDto[] = [];
  public iGNorthwindAPIv2EmployeeDto: EmployeeDto[] = [];

  constructor(
    private iGNorthwindAPIv2Service: IGNorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.iGNorthwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2CustomerDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2CustomerDto = []
    });
    this.iGNorthwindAPIv2Service.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.iGNorthwindAPIv2EmployeeDto = data,
      error: (_err: any) => this.iGNorthwindAPIv2EmployeeDto = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
