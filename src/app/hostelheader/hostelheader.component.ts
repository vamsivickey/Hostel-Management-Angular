import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostelheader',
  templateUrl: './hostelheader.component.html',
  styleUrls: ['./hostelheader.component.css']
})
export class HostelheaderComponent {


  constructor(private service:HostelService, private router:Router){
    // this.service.getCustomers()

  }
  setLogoutStatus(){
    this.service.setLogoutStatus();
    this.router.navigate(['login'])

  }

}
