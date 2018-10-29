import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.router.navigate(['login']);
  }

  Register() {
    this.router.navigate(['register']);

  }

}
