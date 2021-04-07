import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "app/models/car";
import { ListResponseModel } from "app/models/listResponseModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarService {
  apiUrl = "https://localhost:44303/api/";
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
