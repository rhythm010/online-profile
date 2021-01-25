import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  enableUpdate: boolean = true;

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
    this.reloadApp();
  }

  reloadApp() {
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(() => {
        if (this.enableUpdate) {
          window.location.reload();
        }
      });
    }
  }

}
