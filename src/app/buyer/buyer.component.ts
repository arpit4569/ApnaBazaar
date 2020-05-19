import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
     private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

}
