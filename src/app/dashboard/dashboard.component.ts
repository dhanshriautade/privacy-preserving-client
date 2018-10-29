import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
const URL = 'http://localhost:2100/api/upload';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

    /**
   * function for file selection change event
   * @author Yuvraj
   */
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         swal('File uploaded successfully');
     };
 }

 LogOut(){
this.router.navigate(['FirstPage'])
 }

}
