import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sodeService } from '../services/sode-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean;
  formData: any = {}
  val_firstname = new FormControl('', [Validators.required]);
  val_lastname = new FormControl('', [Validators.required]);
  val_email = new FormControl('', [Validators.required]);
  val_password = new FormControl('', [Validators.required]);

  constructor(private sodeservice: sodeService, private router: Router) {
    this.hide = true;
  }

  ngOnInit() {
  }

  Register() {

    this.sodeservice.register(this.formData).subscribe(res => {
      if (!res.error) {
        swal("User Register Successfully").then(res => {
          this.router.navigate(['login']);
        })
      }
    }, error => {
      console.log("API Error");
    })

  }
  login(){
    this.router.navigate(['login']);
  }
}
