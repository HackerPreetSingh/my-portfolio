import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/pojos/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  fullTimeExperiences: Experience[] = new Array(1);
  // singleDayInternshipExperiences: Experience[] = new Array(3);
  internshipExperiences: Experience[] = new Array(5);

  constructor() {
    /**
    * fULL TIME EXPERIENCES
    */
    this.fullTimeExperiences = [{
      imagePath:"../../../assets/images/experience/infosys.png",
      companyName:"Infosys Limited",
      designation:"Digital Specialist Engineer",
      tenure:"(1+ years)",
      workArea:[
        "Project: NIKE DIGITAL ORDER FULFILLMENT",
      "I am working as a driver of my team for a major and crucial launch at Nike. As part of this major launch. I developed several adapters and interfaces, which were capable of interacting with IBM-MQ, Apache Kafka, SAP S/4 HANA and many more.",
      "I am a part of team which implemented several micro-services as part of the NIKE Fulfillment Gateway Platform. The platform exposes bunch of Rest Endpoints to consume order Updates from Different vendors across all geo locations.",
      "I also implemented service which consumes order updates from SAP system and pass it to Fulfillment Platform.",
      "These endpoints are highly scalable with single digit milliseconds throughput. This platform is based on AWS ECS, Docker and Serverless Framework which help us in creating lightweight container and reduce our deployment time and more cost efficient also.",
      "Along with implementing Observability as Code with Terraform and SignalFx, I also created several Splunk dashboards for tracking the status of orders and integrated with Pager Duty for on-call alerts.",
      "I handled many critical production issues and test issues with team leads in an efficient manner. "
    ]
    }];

    /**
    * SINGLE DAY INTERNSHIP EXPERIENCES

    this.singleDayInternshipExperiences = [
    {
      imagePath:"../../../assets/images/experience/jpmc.jpg",
      companyName:"JP Morgan and Chase Co.",
      designation:"Software Engineering Virtual Experience",
      tenure:"July 2022",
      workArea:["It was a single day internship in which I was assigned some tasks which, a full time employee does at the organisation and I was judged based on my efficiency."]
    },
    {
      imagePath:"../../../assets/images/experience/walmart.jpg",
      companyName:"Walmart Global Tech",
      designation:"Software Engineering Virtual Experience",
      tenure:"July 2022",
      workArea:[""]
    },
    {
      imagePath:"../../../assets/images/experience/goldman-sachs.jpg",
      companyName:"Goldman Sachs",
      designation:"Software Engineering Virtual Experience",
      tenure:"July 2022",
      workArea:[""]
    }];
    */
    this.internshipExperiences =[
      {
      imagePath:"../../../assets/images/experience/wiley.png",
      companyName:"Wiley mthree",
      designation:"Software Engineer Intern",
      tenure:"(Jun 2021 - Sep 2021)",
      workArea:["After getting trained in Java, Spring MVC and Spring Boot along with some front end technologies like react and NoSQL Database like Cassandra, I had to work on these and on basis of this, I was offered a contractual role at JP Morgan and Chase Co as a Software developer."]
    },
    {
      imagePath:"../../../assets/images/experience/bsnl.png",
      companyName:"B.S.N.L Limited",
      designation:"Technical Trainee",
      tenure:"(Jun 2019 - Jul 2019)",
      workArea:["Various aspects of Communication System that include Transmitter, receiver and optical fibre were taught and later dealt with. Several networking protocols were taught that included TCP/IP, FTP,SMTP."]
    },
    {
      imagePath:"../../../assets/images/experience/eschool.jpg",
      companyName:"Eschool Inc.",
      designation:"Core Java Trainee",
      tenure:"(May 2018 - Jun 2018)",
      workArea:["I had learned basic to advanced concepts of Core Java along with its implementation in G.U.I. based interface. I had also developed several basic desktop applications and fundamental modules which include calculator, Paint application and Snake Game etc."]
    }];
   }

  ngOnInit(): void {
  }

  headingId1 = "heading1";
  headingId2 = "heading2";

  mEnter(value:number){
    if(value==1) {
      this.headingId1 = "heading1hover";
      this.headingId2 = "heading2";
    } else {
      this.headingId2 = "heading2hover";
      this.headingId1 = "heading1";
    }
  }
  mLeave(){
    this.headingId1 = "heading1";
    this.headingId2 = "heading2";
  }
}
