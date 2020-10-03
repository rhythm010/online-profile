import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ChartType, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-right-details-panel',
  templateUrl: './right-details-panel.component.html',
  styleUrls: ['./right-details-panel.component.scss'],
  animations: [trigger('fade',
    [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(20, style({ opacity: 0 }))
      ])
    ]
  )]
})
export class RightDetailsPanelComponent implements OnInit {
  @ViewChild("myChart", null) _myChart: ElementRef;
  @ViewChild('scrolling', null) scrollingPart: ElementRef;

  // bar variables
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  showHover: boolean = true;
  hoverActive: boolean = false;
  hoverCount = 0;
  show: boolean = false;
  blockList: { value: number; bufferValue: number; mode: string; style: string; percent: number; title: string; }[];

  // donut chart
  public doughnutChartData = [
    50, 20, 30
  ];
  public doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels = ['Front End', 'Back End', 'Projects'];
  public chartOptions: ChartOptions = {
    cutoutPercentage: 70,
    legend: {
      display: false
    },
    tooltips: {
      custom: (tooltipModel) => {
        // tooltipModel.x = (this._myChart.nativeElement.width / 1.5);
        // tooltipModel.y = (this._myChart.nativeElement.height / 1.5);
        tooltipModel.x = 200;
        tooltipModel.y = 5;
      }
    }
  };
  public dColors: any[] = [
    {
      backgroundColor: ['rgb(63, 81, 182)', 'rgb(235, 168, 44)', 'rgb(224, 52, 60)'],
      borderWidth: [0, 0, 0]
    }
  ];

  // hovering image url change
  selectedImgUrl: string = '';
  imageUrlList = ['https://img.icons8.com/color/48/000000/angularjs.png',
    'https://img.icons8.com/color/48/000000/nodejs.png',
    'https://img.icons8.com/plasticine/100/000000/idea.png'

  ];
  showAngular: boolean = false;
  showNode: boolean = false;
  showIdea: boolean = false;
  styleTop: string = '';
  styleLeft: string = '';

  constructor() {
  }

  ngOnInit() {
    let imgIndex = 0;

    this.blockList = [
      { value: 80, bufferValue: 75, mode: 'determinate', style: 'block-1', percent: 70, title: 'TypeScript' },
      { value: 60, bufferValue: 75, mode: 'determinate', style: 'block-2', percent: 50, title: 'Javascript' },
      { value: 50, bufferValue: 75, mode: 'determinate', style: 'block-4', percent: 50, title: 'HTML5/CSS3' },
      { value: 50, bufferValue: 75, mode: 'determinate', style: 'block-5', percent: 50, title: 'Node/Express' },
      { value: 40, bufferValue: 75, mode: 'determinate', style: 'block-3', percent: 40, title: 'Python' },
      { value: 50, bufferValue: 75, mode: 'determinate', style: 'block-6', percent: 50, title: 'MongoDB' }
    ];

  }

  hideHoverText() {
    this.showHover = false;
  }

  public onChartHover(event: any) {
    if (this.hoverCount == 0) {
      this.hoverCount = 1;
      this.selectedImgUrl = this.imageUrlList[event.active[0]._index];

      switch (event.active[0]._index) {
        case 0:
          this.showNode = false;
          this.showIdea = false;
          this.showAngular = true;
          this.styleTop = '38%';
          this.styleLeft = '43%';
          break;
        case 1:
          this.showAngular = false;
          this.showIdea = false;
          this.showNode = true;
          this.styleTop = '35%';
          this.styleLeft = '42%';
          break;
        case 2:
          this.showAngular = false;
          this.showNode = false;
          this.showIdea = true;
          this.styleTop = '33%';
          this.styleLeft = '43%';
          break;
      }

      this.showHover = true;
      setInterval(() => {
        if (this.showHover) {
          // this.showHover = !this.showHover;
          this.hoverCount = 0;
        }
      }, 1500);
    }

  }

  public NavigateOnChartClick(event) {
    if (event.active[0]._index == 0 || event.active[0]._index == 1)
      this.scrollingPart.nativeElement.scrollIntoView({ behavior: 'smooth' });

  }


}
