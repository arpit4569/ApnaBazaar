import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

}
