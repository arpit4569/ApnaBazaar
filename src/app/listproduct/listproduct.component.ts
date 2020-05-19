import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ListproductService } from '../service/listproduct.service';
class Product
{
   product_id;
   product_name;
   product_price; 
}
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

listproductForm: FormGroup;
 product : Product[] =[];
 isUpdate = false ;
 product1 : Product ;
 deletemessage=false;  
 
  constructor( private formBuilder: FormBuilder,
     private router: Router,private http: HttpClient) { }

 
  ngOnInit(): void {

this.listproductForm = this.formBuilder.group({
     product_id: new FormControl(),
     product_name: new FormControl(),
     product_price: new FormControl(),
    });
}

    save(listproductForm){
     this.http.post('http://localhost:7099/saveProduct',listproductForm.value).subscribe(
      r1 =>{
        console.log(r1);
          
      }
    );
  
  this.isUpdate = false;
  }
  
  
 
  readProduct1()
  {
   this.http.get<Product[]>('http://localhost:7099/readProduct1').subscribe(
       r1=>
       {
       this.product = r1;
       }
  );
  
  }



  readProduct(){
    this.service.readProduct(this.listproductform).subscribe(
      r1 =>{
        console.log(r1);
         
   
      }
    );
    
  }
   delete(product_id)
     {
   this.http.delete<Product>('http://localhost:7099/delete/'+ product_id).subscribe(


       r1=>
       {
       console.log(r1);
       this.product = null;
      this.deletemessage=true;   
       }
  );
}
  
  Productupdate(product_id)
  {
    this.isUpdate = true;
   this.http.get<Product>('http://localhost:7099/updateProduct/'+ product_id).subscribe(

       r1=>
       {
       this.product1 = r1;
       }
  );

}


}



