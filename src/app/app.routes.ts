import { Routes } from '@angular/router';
import { ProductComponent } from './components/products/product/product.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Über', component: ProductComponent },
  { path: 'Produkte', component: ProductComponent },
  { path: 'Blog', component: ProductComponent },
  { path: 'Kontakt', component: ProductComponent },
];
