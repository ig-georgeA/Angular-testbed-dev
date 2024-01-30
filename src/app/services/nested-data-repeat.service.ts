import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NestedDataType } from '../models/nested-data-repeat/nested-data-type';

@Injectable({
  providedIn: 'root'
})
export class NestedDataRepeatService {
  constructor(
    private http: HttpClient
  ) { }

  public getNestedData(): Observable<NestedDataType> {
    return this.http.get<NestedDataType>("https://raw.githubusercontent.com/zdrawku/data/master/IGDSC-Library.json");
  }
}
