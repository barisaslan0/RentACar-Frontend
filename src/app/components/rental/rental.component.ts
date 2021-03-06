import { Component, OnInit } from '@angular/core';
import { Rental } from 'app/models/rental';
import { RentalService } from 'app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  dataLoaded=false
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe((respnse)=>{
      this.rentals=respnse.data
      this.dataLoaded=true
    })
  }

}
