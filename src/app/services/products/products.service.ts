import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { route_api } from 'src/config/routes';
import { Product } from 'src/app/models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ruta = route_api + 'products'

  constructor(
    private http: HttpClient,
  ) { }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.ruta}/${id}`, { headers: { 'Accept': 'application/json' } });
  }
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ruta, { headers: { 'Accept': 'application/json' } });
  }

}