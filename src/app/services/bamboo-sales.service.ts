import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { PeopleType } from '../models/bamboo-sales/people-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BambooSalesService {
  constructor(
    private http: HttpClient
  ) { }

  public getPeopleList(): Observable<PeopleType[]> {
    return this.http.get<PeopleType[]>("https://excel2json.io/api/share/f089be16-2144-4467-00d5-08dd632d8d2c")
      .pipe(catchError(ErrorHandlerService.handleError<PeopleType[]>('getPeopleList', [])));
  }
}
