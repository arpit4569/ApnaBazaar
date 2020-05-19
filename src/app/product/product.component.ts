import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

class Product
{
   product_id;
   product_name;
   Product_price; 
   inventories;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 productForm: FormGroup;
 registrationForm: FormGroup;
  constructor(private service: ProductService, private formBuilder: FormBuilder,
     private router: Router) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      id: new FormControl(),
      product_name: new FormControl(),
       product_price: new FormControl(),
       inventories: new FormControl(),

       
      
    });
  }

  save(){
    this.service.save(this.productForm).subscribe(
      r1 =>{
        console.log(r1);
         
   
      }
    );
    
  }

}
