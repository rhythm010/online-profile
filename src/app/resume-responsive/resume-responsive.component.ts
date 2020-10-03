import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-responsive',
  templateUrl: './resume-responsive.component.html',
  styleUrls: ['./resume-responsive.component.scss']
})
export class ResumeResponsiveComponent implements OnInit {

  arr = [{
    name: 'Name',
    ans: 'Rhythm Khanna'
  },
  {
    name: 'Birthday',
    ans: '1st Jan 1994'
  },
  {
    name: 'Staying in',
    ans: 'Pune, India'
  },
  // {
  //   name: 'Phone',
  //   ans: '+91-8423222006'
  // },
  {
    name: 'Email',
    ans: 'rhythm.khanna7@gmail.com'
  }];

  description = `Hi, Welcome to my space !!
   If you are a recruiter, do check my work`;

  // for employment related info
  expansionInfoEmployment: any = {
    title: "employment",
    data: [
      {
        header: "Mindtree Ltd",
        subHeader: "Front-End || Full-Stack Developer",
        details: [`Currently working on ag-grid for a marketplace project as MEAN stack developer using Angular 8 in a mono-repo architecure (NrWL).
          I worked in typescript and JS in my previous project with a US based client on building their platform from scratch.`,
          `My overall work in Mindtree has been divided into the following areas:`],

        pointers: [
          'Developed reusable UI components using Angular 2/8, Typescript, Javascript with Material Design themes using HTML5, CSS/SASS styling',
          'Exposed the developed UI components to REST APIs using Services. Designed efficient and dynamic API interaction for reusability',
          'Built the Front-End Architecture for Authorization & Authentication for a multi-level authorization access to routes/pages',
          'Worked with Charting Libraries like Charts.JS, Ng-Charts for data representation and plotting',
          'Worked in converting an existing Angular application into a Progressive Web Applications (PWA)',
          'Help in address and recognise existing issues and problems at code levels and take up side projects to solve them',
          'Have Exposure towards creating REST API\'s using NodeJS and ExpressJS along with MongoDB'
        ],
        startYear: 2019,
        endYear: 0,
        badge: false
      }, {
        header: "Tech Mahindra Ltd",
        subHeader: "Software Developer - R&D",
        details: [`Wrote backend logic for features in X-Retail using Python and Flask. Shifted to Front-End Development in my second project New Age Delivery which proved to 
        be an amazing learning experience for me.`],
        pointers: [
          'Develop Responsive and Cross-Browser compatible UI modules using Angular to be shared across multiple sections of the platform',
          'Wrote backend logic for data exchange in Python and Flask in Back-End',
          'Built a Error mapping tool as an innovation drive for the project that mapped realtime console errors, API Failure and other statistics'],
        startYear: 2016,
        endYear: 2019,
        badge: true
      }]
  };

  // for domain exposure related info
  expansionInfoDomainExposure: any = {
    title: "Domain Exposure",
    data: [{
      header: "Mindtree Ltd",
      subHeader: "Front-End/Full-Stack Developer",
      startYear: 2019,
      endYear: 0,
      details: "These are the details that need to be there",
      pointers: ['one', 'two', 'three']
    }]
  };

  // My top Technical Contributions
  expansionInfoTechContribution: any = {
    title: "My Best Work",
    data: [{
      header: "Feedback Screenshot Tool - FMT",
      subHeader: "Angular/TypeScript",
      startYear: 2019,
      endYear: -1,
      details: [
        `Developed a wrapper tool above the project UI that reduced bug reproduction time whenever testing team assigned a bug to the developer.`,
        `The can also be used by managers to locate bugs/add ideas to any part of the application`
      ],

      pointers: [
        `The tool implemented as a service recorded console errors with a custom Error Handler, API call faiures using Http Interceptor, route location by listening to routing lifecycle events in real time`,
        `In case of an API failure/console-error/UI distortion/bug report by tester, the service created a log event object on the client side which contained the route location, exact error, component name and other details`,
        `The log event was then pushed in the database using a REST API that mapped routes with the errors logged in that route`,
        `When the bug was assigned to a developer, the developer can take a look at the bug log object before proceeding towards reproducing the bug`,
        `By referring the log object, the devloper can get an idea before-hand about any API failures/console errors which made it easier in fixing the issue`
      ],
      badge: false,
      code: true
    }]
  };

  constructor() { }

  ngOnInit() {
  }

  // method will be used to download the resume from the site
  downloadResume() {

  }

}
