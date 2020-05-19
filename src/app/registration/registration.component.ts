import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  showMsg = false;
  registrationForm: FormGroup;
  constructor(private service: RegistrationService, private formBuilder: FormBuilder,
     private router: Router) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
     id: new FormControl(),
      name: new FormControl(),
       gst: new FormControl(),
       role : new FormControl(),
      username: new FormControl(),
     password : new FormControl(),
    });
  }

  save(){
    this.service.save(this.registrationForm).subscribe(
      r1 =>{
        console.log(r1);
         this.showMsg = true;
   
      }
    );
    
  }

}
