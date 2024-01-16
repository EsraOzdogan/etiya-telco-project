import { SearchCustomer } from './../../models/searchCustomer';
import { Customer } from './../../models/customer';
import { catchError, Observable, retry, Subject } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiControllerUrl);
  }

  sendGetRequest(page: number = 0, pageSize: number = 20) {
    // Add safe, URL encoded_page parameter
    const options = {
      params: new HttpParams({ fromString: '_page='+page+'&_limit='+pageSize }),
    };
    return this.httpClient
      .get<Customer[]>(this.apiControllerUrl, options)
      .pipe(retry(3));
  }

  getListByFilter(searchCustomer: SearchCustomer): Observable<Customer[]> {
    //backend simülasyonu
    const subject = new Subject<Customer[]>();
    this.httpClient.get<Customer[]>(this.apiControllerUrl).subscribe({
      next: (response) => {
        let filteredCustomers = response;
        if (searchCustomer.id) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.id == searchCustomer.id
          );
        }
        if (searchCustomer.accountNumber) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.billingAccounts.find(
              (ba) => ba.accountNumber == searchCustomer.accountNumber
            )
          );
        }
        if (searchCustomer.gsmNumber) {
          filteredCustomers = filteredCustomers.filter(
            (item) => item.contactMedium.mobilePhone == searchCustomer.gsmNumber
          );
        }

        if (searchCustomer.firstName) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.firstName
              .toLowerCase()
              .includes(searchCustomer.firstName.toLowerCase())
          );
        }
        if (searchCustomer.lastname) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.lastName
              .toLowerCase()
              .includes(searchCustomer.lastname.toLowerCase())
          );
        }
        if (searchCustomer.orderNumber) {
          filteredCustomers = filteredCustomers.filter((item) =>
            item.billingAccounts.find((ba) =>
              ba.orders.find((o) => o.id == searchCustomer.orderNumber)
            )
          );
        }
        subject.next(filteredCustomers); //http isteginde hata olmazsa
      },
      error: (err) => { //http isteginde hata olursa
        subject.error(err);
      },
      complete: () => {
        //en son calısan yer
        subject.complete();
      },
    });
    return subject.asObservable();
  }
}
