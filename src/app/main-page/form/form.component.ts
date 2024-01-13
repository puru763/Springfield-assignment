import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [ServiceService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public pinCode!: any
  public city: string = ''
  public state: string = ''
  public invalidData: boolean = false

  constructor(private service: ServiceService) { }
  public fetchLocation(): void {
    let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/)
    if (regex.test(this.pinCode)) {
      this.invalidData = false
      this.service.getLocationData(this.pinCode).subscribe({
        next: (response: Array<{ City: string, State: string }>) => {
          this.city = response[0].City
          this.state = response[0].State
        }
      })
    } else {
      this.invalidData = true
    }
  }
}
