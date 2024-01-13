import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getLocationData(pinCode:string) {
    return this.http.get(`https://api.sfoly.com/getPincodeDetails?pincode=${pinCode}`)
  }
}
