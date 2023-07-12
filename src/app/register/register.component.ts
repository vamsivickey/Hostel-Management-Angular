import { Component } from '@angular/core';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private service : HostelService, private router:Router){

}
                                                                                                                        
ngOnInit():void{
}
registerCust(customer : any) {
  alert("hii hello");
  console.log(customer);
  this.service.registerCust(customer).subscribe(); 
  this.router.navigate(['login']);      

}
}