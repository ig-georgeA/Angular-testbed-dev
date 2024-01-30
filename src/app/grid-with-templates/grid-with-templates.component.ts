import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/ig-northwind-apiv2/employee-dto';
import { IGNorthwindAPIv2Service } from '../services/ignorthwind-apiv2.service';

@Component({
  selector: 'app-grid-with-templates',
  templateUrl: './grid-with-templates.component.html',
  styleUrls: ['./grid-with-templates.component.scss']
})
export class GridWithTemplatesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public iGNorthwindAPIv2EmployeeDto: EmployeeDto[] = [];

  constructor(
    private iGNorthwindAPIv2Service: IGNorthwindAPIv2Service,
  ) {}

  ngOnInit() {
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
