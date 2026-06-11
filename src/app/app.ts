import { Component } from '@angular/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'monauppi-root',
  imports: [BreadcrumbComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
})
export class App {}
