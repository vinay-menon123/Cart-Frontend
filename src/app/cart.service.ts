import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:String = "http://localhost:8080/getCart";
  updateUrl:String = "http://localhost:8080/addCart";
  subUrl:String = "http://localhost:8080/subCart";
  cartUrl:String = "http://localhost:8080/finCart"
  constructor(private httpClient:HttpClient) { }
  getCartId(id:number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  updateCartAdd(id:number, cart_id:number):Observable<any>{
    return this.httpClient.put<any>(`${this.updateUrl}/${id}`,cart_id);
  }
  updateCartSubtract(id:number, cart_id:number):Observable<any>{
    return this.httpClient.put<any>(`${this.subUrl}/${id}`,cart_id);
  }
  finCart(id:number): Observable<any>{
    return this.httpClient.get(`${this.cartUrl}/${id}`);
  }
}
