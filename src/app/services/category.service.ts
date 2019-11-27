import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }
  categories: Category[];

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(dataCategory => console.log(JSON.stringify(dataCategory))),
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

}
