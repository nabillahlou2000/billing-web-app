import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface onInit {
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements onInit{
  products:any;
  constructor(private http:HttpClient) {}

  ngOnInit():void{
    this.http.get("http://localhost:8885/PRODUCT-SERVICE/products").subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{}
    })
  }

}
