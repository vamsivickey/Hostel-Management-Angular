import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostelregistration',
  templateUrl: './hostelregistration.component.html',
  styleUrls: ['./hostelregistration.component.css']
})
export class HostelregistrationComponent {
  HostelsList:any;
  constructor(private service : HostelService, private router:Router){
    // constructor(private service:HostelService, private router:Router) { 
      this.service.getHstls().subscribe((data:any)=>{
        console.log(data)
        this.HostelsList=data;
      })
    }

    setLogoutStatus(){
      this.service.setLogoutStatus();
      this.router.navigate(['login']);
    }



  registerhstl(hostel : any) {
    alert("hii hello");
    console.log(hostel);
    this.service.registerHstl(hostel).subscribe();
    alert("hostel");
    // this.router.navigate(['loginhostel']); 
  
  }

}
