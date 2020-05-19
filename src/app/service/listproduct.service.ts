import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ListproductService {
 url='http://localhost:7099'
  constructor(private http: HttpClient) { }

readProduct(listproductForm:FormGroup )
  {

      return this.http.get<Product[]>(this.url + '/' + 'readProduct', listproductForm.value);
   
  
  }

}
