import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.css'],
    standalone: false
})
export class AwardsComponent implements OnInit {

  awards!:any;
  certifications!:any;
  trophyLink="../../../assets/images/awardsAndCertifications/awards/trophy.png";
  certificationLink="../../../assets/images/awardsAndCertifications/certifications/certification.png";
  constructor() {
    this.awards=[
    {
      title:"Certificate of Appreciation by Infosys: INSTA AWARDS (2023)",
      description:"For completing assigned task before time, supporting for other's tasks and being proactive in work.",
      credentialsLink: "https://drive.google.com/file/d/1Uxt4Mf5ZtD7D_kk8HZ0JCbwSqnKi5GIZ/view?usp=drivesdk"
    },
    {
      title:"Certificate of Appreciation by Infosys: INSTA AWARDS (2022)",
      description:"For very fast competency ramp up, proactiveness, innovative thinking and active participation in all design activities.",
      credentialsLink: "https://drive.google.com/file/d/1coOBLC82v0Sr_McS0lpBuH8w5d0X018r/view?usp=share_link"
    }
  ];

  this.certifications=[
  {
    title:"Infosys Certified Java Programmer (2021)",
    description:"All of my core Java Skills were tested in this certification along with some good quality programming problems to solve. ",
    credentialsLink: "https://drive.google.com/file/d/1coOBLC82v0Sr_McS0lpBuH8w5d0X018r/view?usp=share_link"
  },
  {
    title:"Infosys Certified Spring Boot Programmer (2021)",
    description:"All of my Spring Boot Skills were tested in this certification along with some good quality programming problems to solve. ",
    credentialsLink: "https://drive.google.com/file/d/1coOBLC82v0Sr_McS0lpBuH8w5d0X018r/view?usp=share_link"
  },
  {
    title:"Scrum Foundation Professional Certificate (2021)",
    description:"This certification contained the questions related to definition of Scrum, including roles, events, artifacts, and the rules that bind them together.",
    credentialsLink: "https://drive.google.com/file/d/1coOBLC82v0Sr_McS0lpBuH8w5d0X018r/view?usp=share_link"
  }]
  }

  ngOnInit(): void {
  }

}
