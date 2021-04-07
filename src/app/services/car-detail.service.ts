import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'app/models/car';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44303/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
