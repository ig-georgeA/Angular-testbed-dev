import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NestedDataType } from '../models/nested-data-repeat/nested-data-type';
import { NestedDataRepeatService } from '../services/nested-data-repeat.service';

@Component({
  selector: 'app-expansion-panels-tree',
  templateUrl: './expansion-panels-tree.component.html',
  styleUrls: ['./expansion-panels-tree.component.scss']
})
export class ExpansionPanelsTreeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public nestedDataRepeatNestedData?: NestedDataType;

  constructor(
    private nestedDataRepeatService: NestedDataRepeatService,
  ) {}

  ngOnInit() {
    this.nestedDataRepeatService.getNestedData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.nestedDataRepeatNestedData = data,
      error: (_err: any) => this.nestedDataRepeatNestedData = undefined
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
