import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private guestService: GuestService,
    private router: Router
  ) { }
  public name?: string;
  visitor_login() {
    if (this.name) {
      // this.guestService.add_guest(this.name);
      this.guestService.register(this.name);
      this.router.navigate(["/main"])
    } else {
      // error
    }
    console.log(this.guestService.info)
  }
  ngOnInit(): void {
  }
}
