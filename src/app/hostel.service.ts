import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
message:any;
mail:any;

  bookCust(customer: any) {
    throw new Error('Method not implemented.');
  }
  
  private loginStatus: boolean;
  private logoutStatus: boolean;

  constructor(private httpClient:HttpClient) {
    this.loginStatus = false;
    this.logoutStatus = true;
    
  }
  getLoginStatus(){
    return this.loginStatus;
   }

   getLogoutStatus(){
    return this.logoutStatus;
   }

   setLoginStatus(){                                              
    alert('Login service is called..')
    return this.loginStatus = true;
   }

   setLogoutStatus(){
    alert('Logout service is called..')
    return this.loginStatus = false;
   }

  registerCust(customer:any){
    console.log(customer); 
  return this.httpClient.post('registerUser', customer);       
 }
 getCustomers(){
  return this.httpClient.get('getAllUsers');
 }

 deleteCust(custId:any){
  return this.httpClient.delete('deleteUser/' + custId );
 }

 updateCust(editObject: any) {
  return this.httpClient.put('updateUser', editObject);
 }

 registerHstl(hstl:any){
  console.log(hstl); 
  alert("service");
return this.httpClient.post('registerHostels', hstl);       
}
getHstls(){
  return this.httpClient.get('getAllHostels');
 }

deleteHstl(hstlId:any){   
  return this.httpClient.delete('deleteHostels/' + hstlId );
 }

 updateHstl(editObject: any) {
  return this.httpClient.put('updateHostels', editObject);
 }

 

otpsend(phonenumber:any){
  return this.httpClient.post('mobileNo', phonenumber); 
}

BookCust(booking:any){
  console.log(booking); 
return this.httpClient.post('registerBookingDetails', booking);       
}




setMessage(data:any){
this.message=data;
}
getMessage(){
  return this.message;
}

getBooking(){
  return this.httpClient.get('getAllBookingDetails');
 }
 setMail(data:any){
  this.mail=data;
  }
  getMail(){
    return this.mail;
  }

  getByEmail(email:any){
    return this.httpClient.get('getDepartmentByemail/'+email);
  }

  getbilldetails(){
    return this.httpClient.get('getAllBookingDetails');
  
    
  }

   


}