import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  bill:any;
  customerId!:number;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit():void{
    this.http.get("http://localhost:8885/BILLING-SERVICE/bills/search/byCustomerId?projection=fullBills&customerId="+this.customerId).subscribe({
      next:(data)=>{
        this.bill=data;
      },
      error:(err)=>{}
    })
  }

  getBillDetail(b: any) {
    this.router.navigateByUrl("/bill-details/"+b.id);
  }
}
