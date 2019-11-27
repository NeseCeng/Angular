import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  products: Product[];

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + '?categoryId=' + categoryId
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata Oluştu. ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel Bir Hata Olustu. ' + err.error.message;
    }
    return throwError(errorMessage);

  }
  getSpringMyServis() {
    return this.http.get<Product[]>("http://localhost:8081/books").pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })

    }

    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}
