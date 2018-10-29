import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sodeService } from '../services/sode-api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;

  formData: any = {}
  val_email = new FormControl('', [Validators.required])
  val_password = new FormControl('', [Validators.required])


  constructor(private sodeservice: sodeService, private router: Router) {
    this.hide = true
  }

  ngOnInit() {
  }
  Login() {
    this.sodeservice.login(this.formData).subscribe(res => {
      if (!res.error) {
        swal("User Login Successfully").then(res => {
          this.router.navigate(['dashboard']);
        })
      }
    }, error => {
      console.log("API Error");
    })
  }

  home(){
    this.router.navigate(['FirstPage']);
  }
}
