import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
