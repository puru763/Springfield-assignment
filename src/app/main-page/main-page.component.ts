import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
import { NavbarComponent } from "./../navbar/navbar.component";
import { PricingComponent } from "./pricing/pricing.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormComponent,NavbarComponent,PricingComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
