import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'http://localhost:3000/products';
  constructor( private http: HttpClient) { }


  getProducts(limit: number) {
    return this.http.get<IProducts[]>(`${this.url}/?_limit=${limit}`)
  }


  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`)
  }
}
