import { ListResponseModel } from './../../models/listResponseModel';
import { Customer } from './../../models/customer';
import { CustomersService } from './../../services/customers/customers.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customerList! : Customer[];
  customerList1! : Customer[];
  lenght!:number;

//@Input() filteredData! : Customer[];

customerListModel: ListResponseModel<Customer> = {
  index: 0,
  size: 20,
  items: []
};


  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomersList();

    //console.warn(this.filteredData)
  }

  getCustomersList(){
    this.customersService.sendGetRequest(this.customerListModel.index, this.customerListModel.size).subscribe(response=>{
      this.customerList= response
      // console.log(this.customerList)
      // console.log(this.customerList[0].addresses[0].city.name)
      // console.log(this.customerList[0])

    })
  }


  search(event:any){
    console.log("bbbbb")

    console.log(event)
    this.customerList1 = event
    this.lenght = this.customerList1.length

  }


}
