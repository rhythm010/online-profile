import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expand-details',
  templateUrl: './expand-details.component.html',
  styleUrls: ['./expand-details.component.scss']
})
export class ExpandDetailsComponent implements OnInit {

  ispanelOpen: boolean = true;
  showBadge: boolean = false;

  @Input()
  themeColor: string = "#5caaf3";

  @Input()
  expansionData = {
    title: "employment",
    data: [{
      header: "Mindtree Ltd",
      subHeader: "Front-End/Full-Stack Developer",
      startYear: 2019,
      endYear: 0,
      details: "These are the details that need to be there",
      pointers: ['one', 'two', 'three'],
      badge: true
    }]
  }

  constructor() { }

  ngOnInit() {
    // this.themeColor = "green"
  }

  // move over items
  moveOverBadge(event: Event) {
    event.stopPropagation();
    // console.log('bingo');
    this.showBadge = true;
  }

  // on mouse hover out
  onMouseHoverOut() {
    this.showBadge = false;
  }

}
