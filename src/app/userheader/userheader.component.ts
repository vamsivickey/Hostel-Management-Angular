import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

declare var jQuery : any;


@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent {
  customers:any;
  editObject:any;


  constructor(private service:HostelService, private router:Router){
    this.service.getCustomers().subscribe((data: any)=>{
      console.log(data);
      this.customers = data;                               
    })                                                  
    this.editObject = {custId: '', firstName: '',  lastName: '', mob_nub: '' , emailId: '', password: ''};
  }

  setLogoutStatus(){
    this.service.setLogoutStatus();
    alert("hii router");
    this.router.navigate(['login'])
  }


  deleteCust(custId: number){
    this.service.deleteCust(custId).subscribe((data)=>{
    const index = this.customers.findIndex((customer:any)=>{
        return customer.custId === custId;
      });
      this.customers.splice(index,1);
    });
    }

    showEditPopup(currentuser: any) {
      this.editObject = currentuser;
      jQuery('#empModel').modal('show');
    }
    updateCust() {
      this.service.updateCust(this.editObject).subscribe();
      console.log(this.editObject);
    }
}
