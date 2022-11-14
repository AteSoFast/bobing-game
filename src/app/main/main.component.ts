import { Component, OnInit } from '@angular/core';
import { GuestsComponent } from '../guests/guests.component';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    public guestService: GuestService,
  ) { }
  public times: number=0;
  public name?: string;
  add_player() {
    if (this.name) {
      this.guestService.add_guest(this.name);
      this.times=this.times+1;
    } else {
      // error
    }
    console.log(this.guestService.info)
  }
  // get showplayer(){
  //   for(let i=0;i<this.guestService.info.length;i++){
  //     return this.guestService.info[this.guestService.index];
  //   }
  // }
  ngOnInit(): void {
  }
  // add:void{
  //   this.num=this.num+1;
  // }
}
