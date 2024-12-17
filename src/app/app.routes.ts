import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
{
  path :'contact',
  component :ContactUsComponent
},
{
  path :'',
  component :HomeComponent
},
{
    path:'table',
    component:TableComponent
},
{
  path :'product',
  component :ProductComponent
},




];
