import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Über', component: AboutComponent },
  { path: 'Produkte', component: ProductsComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Kontakt', component: ContactComponent },
];
