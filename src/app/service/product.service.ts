import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   url='http://localhost:7099'
  constructor(private http: HttpClient) { }

  save(productForm: FormGroup){
    return this.http.post(this.url + '/' + 'saveProduct', productForm.value);
  }



  
}
