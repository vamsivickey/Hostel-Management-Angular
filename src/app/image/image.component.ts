import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;


  constructor(private httpClient:HttpClient){
     
  }


  //Gets called when the user selects an image
  public onFileChanged(event :any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
                                                               

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      
        //Make a call to the Spring Boot Application to save the image
        this.httpClient.post('http://localhost:8085/upload', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.status === 200) {      
              console.log(response);
              
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';         
            }
          }
          );
    
    
      }

      //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:8085/image/get/' + this.imageName)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );     
    }     
}

