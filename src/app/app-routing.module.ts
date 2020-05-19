import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },  
  {path: 'registration', component: RegistrationComponent},
   {path : 'login', component : LoginComponent},
   {path : 'logout',component : LogoutComponent},
   {path : 'buyer',component : BuyerComponent },
    {path : 'buyer',component : LogoutComponent},
   {path : 'seller',component : SellerComponent},
   {path : 'product',component : ProductComponent},
   {path : 'product',component : LogoutComponent},
  {path : 'listproduct',component : ListproductComponent},
  {path : 'listproduct',component : LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

