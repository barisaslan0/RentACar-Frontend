import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Brand } from "app/models/brand";
import { Car } from "app/models/car";
import { Color } from "app/models/color";
import { BrandService } from "app/services/brand.service";
import { CarService } from "app/services/car.service";
import { ColorService } from "app/services/color.service";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"],
})
export class CarComponent implements OnInit {
  colors: Color[] = [];
  cars: Car[] = [];
  brands: Brand[] = [];
  currentBrand:Brand;
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      } else {
        this.getCars();
      }
    });
    this.activatedRoute.params.subscribe((params) => {
      if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      } else {
        this.getCars();
      }
    });
    this.getColors();
    this.getBrands();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
