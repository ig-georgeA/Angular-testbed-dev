import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { CustomersType } from '../models/northwind/customers-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-pickers-combo',
  templateUrl: './pickers-combo.component.html',
  styleUrls: ['./pickers-combo.component.scss']
})
export class PickersComboComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value: string = '2';
  public northwindEmployees: EmployeesType[] = [];
  public value1: string = '3';
  public northwindCustomers: CustomersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('EmployeesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
    this.northwindService.getData('CustomersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
