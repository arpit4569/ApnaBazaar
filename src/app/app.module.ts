import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './service/registration.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { LogoutComponent } from './logout/logout.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';
import { ListproductComponent } from './listproduct/listproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    BuyerComponent,
    SellerComponent,
    ProductComponent,
    ListproductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule{}
