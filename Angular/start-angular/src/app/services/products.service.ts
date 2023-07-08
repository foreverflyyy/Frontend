import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {IProduct} from "../models/product";
import {catchError, delay, Observable, throwError} from "rxjs";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getAll(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>("https://fakestoreapi.com/products", {
        params: new HttpParams({
          fromObject: {limit: 5}
        })
    }).pipe(
      delay(2000),
      catchError(this.handlerError.bind(this))
    )
  }

  private handlerError(error: HttpErrorResponse) {
      this.errorService.handle(error.message);
      return throwError(() => error.message)
  }
}
