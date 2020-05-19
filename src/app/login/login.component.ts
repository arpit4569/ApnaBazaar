import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginStatus = true;
  constructor(private service: LoginService, private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
      
    });
  }
   verifyUser(){
    this.service.verifyUser(this.loginForm).subscribe(
      r1 =>{
        console.log(r1);
        if((<any> r1).message === "success" && (<any> r1).role === "Seller"){
          this.service.loginStatus = true;
           this.router.navigate(['/seller'])
          } 
          if((<any> r1).message === "success" && (<any> r1).role === "Buyer"){
          this.service.loginStatus = true;
          
           this.router.navigate(['/buyer'])
          } 

        
        else {
          console.log('Login Failed. Please retry');
          this.loginForm.controls.password.setValue('');
          this.loginStatus = false;
        }
      }
    )
  }
}
