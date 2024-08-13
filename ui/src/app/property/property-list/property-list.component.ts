import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties!:IProperty[];
  SellRent=1;
  constructor(private route:ActivatedRoute,private HousingService: HousingService) {}
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.HousingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
      }, error =>{
        console.log(error);
      }
    )
  }
}
