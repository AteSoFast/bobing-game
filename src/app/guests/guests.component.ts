import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  selectedGuest?: Guest;
  constructor(
    public guestService: GuestService,
  ) { }

  ngOnInit(): void {
  }
  onSelect(guest: Guest): void {
    this.selectedGuest = guest;
  }
}
