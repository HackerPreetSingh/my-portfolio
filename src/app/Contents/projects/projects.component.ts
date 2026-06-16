import { Component, OnInit } from '@angular/core';
import { Project } from 'src/pojos/Project';

declare const window: any;

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    standalone: false
})

export class ProjectsComponent implements OnInit {


  projects: Project[] = new Array(6);

  constructor() {

      this.projects[0] = {
        imagePath: "../../../assets/images/projects/foodApp.jpg",
        projectName: "Food Ordering Application",
        projectBrief: "Project based on REST API's, Spring Boot and Java.",
        projectDescription: "I had developed a ready to use food ordering REST API as a lonewolf in which the user can do the basic functionality of such app like adding food items, removing them, checking out and so on in an amusing manner.",
        projectLink: "https://github.com/HackpreetSingh/Food-Delivery-Application-REST-API.git"
      },
      // this.projects[1] = {
      //   imagePath: "../../../assets/images/projects/covidApp.jpg",
      //   projectName: "4Covid- A Health Application",
      //   projectBrief: "Project based on Spring MVC, Hibernate and JSP.",
      //   projectDescription: "To bridge the gap between doctors and patients, This application was designed. It was implemented using Layered Approach(Controllers, Service and Dao layers) with backend designed in Java, Spring MVC and Hibernate while Front End designed in JSP and CSS. For database, MySQL was used.",
      //   projectLink: "https://github.com/HackpreetSingh/4Covid-A-Health-Application.git"
      // },
      this.projects[1] = {
        imagePath: "../../../assets/images/projects/bankingApp.jpg",
        projectName: "Fast-Track Banking Application",
        projectBrief: "Project based on Java, and JDBC concepts along with JDBC Template.",
        projectDescription: " In this project, multiple transaction facility was implemented along with all other major operation such as debiting, crediting and many more.",
        projectLink: "https://github.com/HackpreetSingh/Banking_Application.git"
      },
      this.projects[2] = {
        imagePath: "../../../assets/images/projects/bloggingApp.jpg",
        projectName: "Blogify : A Blogging Application",
        projectBrief: "Project based on HTML/CSS/JS and Angular",
        projectDescription: " It was made in a team of 2 and comprised webpages designed from Front End Technologies which include HTML, CSS and Angular.js.These webpages would fetch/update information from a REST API of Blogs designed using Back End Technologies which primarily include Java, MySQL, Spring Boot, JPA and Hibernate.",
        projectLink: "https://github.com/HackpreetSingh/Blogs-Application.git"
      },
      this.projects[3] = {
        imagePath: "../../../assets/images/projects/jeetCarBazaar.jpg",
        projectName: "Jeet Car Bazaar",
        projectBrief: "Full Stack Project with Java/Spring Microservices for backend and Angular for frontend.",
        projectDescription: "This is a utility application for a car showroom owner for not only making it super easy for his customers to gain plethora of details about various types of vehicles present at his showroom but also maintain a digital record for all the vital details about all the cars in that showroom.",
        projectLink: "https://github.com/HackpreetSingh/Jeet-Car-Bazaar-Full-Stack-Enterprise-Web-Application.git"
      },
      this.projects[4] = {
        imagePath: "../../../assets/images/projects/snakeGame.jpg",
        projectName: "Snake Game",
        projectBrief: "Project based on Java, Multi-threading and JDBC concepts along with JDBC Template.",
        projectDescription: "It is not that usual boring Snake game that we can frequently found on everybody's cell phone. It is rather an appealing and quite intuitive G.U.I. based snake game fully implemented in Java.",
        projectLink: "https://github.com/HackpreetSingh/latestrepo/tree/master/NewGame-master"
      }
  }

  ngOnInit(): void {}
}
