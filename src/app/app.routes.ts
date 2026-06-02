import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Über', component: ProductsComponent },
  { path: 'Produkte', component: ProductsComponent },
  { path: 'Blog', component: ProductsComponent },
  { path: 'Kontakt', component: ProductsComponent },
];
