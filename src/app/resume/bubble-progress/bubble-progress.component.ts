import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-progress',
  templateUrl: './bubble-progress.component.html',
  styleUrls: ['./bubble-progress.component.scss']
})
export class BubbleProgressComponent implements OnInit {

  mainList = [1, 2, 3, 4, 5];

  @Input()
  data = {
    title: 'Angular',
    score: 3,
    iconUrl: 'https://img.icons8.com/color/48/000000/python.png',
    width: 30,
    height: 20,
    color: '#20cae5'
  }

  constructor() { }

  ngOnInit() {
    console.log('tactical scope');
    console.log(this.data);
    
  }

}
