import { Component, OnInit } from '@angular/core';
import { HostelService } from '../hostel.service';

declare var jQuery : any;


@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrls: ['./showcustomers.component.css']
})

export class ShowcustomersComponent implements OnInit {
  customers :any;
  editObject: any;
  currentuser:any;
empName:any;
  constructor(private service:HostelService){
    this.service.getCustomers().subscribe((data: any)=>{
      console.log(data);
      this.customers = data;                               
    })                                                  
    this.empName={empName:''};
    this.editObject = {custId: '', firstName: '',  lastName: '', mob_nub: '' , emailId: '', password: ''};
  }
  ngOnInit(): void {
    let Userdata=JSON.parse(localStorage.getItem('UserList')|| '{}');
    this.currentuser=Userdata;
    console.log(this.currentuser);
    
  }
  setLogoutStatus(){
    this.service.setLogoutStatus();
    alert("hii router");
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
