import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/ig-northwind-apiv2/customer-dto';
import { EmployeeDto } from '../models/ig-northwind-apiv2/employee-dto';
import { OrderDetailDto } from '../models/ig-northwind-apiv2/order-detail-dto';
import { OrderDto } from '../models/ig-northwind-apiv2/order-dto';
import { ProductDto } from '../models/ig-northwind-apiv2/product-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class IGNorthwindAPIv2Service {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerDtoList(): Observable<CustomerDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<CustomerDto[]>(`${API_ENDPOINT}/Customers`, options);
  }

  public getCustomerDto(id: string = 'BLONP'): Observable<CustomerDto> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<CustomerDto>(`${API_ENDPOINT}/Customers/${id}`, options);
  }

  public getOrderDtoList(id: string = 'BLONP'): Observable<OrderDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, options);
  }

  public getProductDtoList(id: string): Observable<ProductDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<ProductDto[]>(`${API_ENDPOINT}/Orders/${id}/Products`, options);
  }

  public getOrderDetailDtoList(id: string): Observable<OrderDetailDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, options);
  }

  public getEmployeeDtoList(): Observable<EmployeeDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, options);
  }

  public putCustomerDto(data: any): Observable<CustomerDto> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data;
    return this.http.put<CustomerDto>(`${API_ENDPOINT}/Customers`, body, options);
  }

  public deleteCustomerDto(id: string): Observable<CustomerDto> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.delete<CustomerDto>(`${API_ENDPOINT}/Customers/${id}`, options);
  }

  public postCustomerDto(data: any): Observable<CustomerDto> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data;
    return this.http.post<CustomerDto>(`${API_ENDPOINT}/Customers`, body, options);
  }
}
