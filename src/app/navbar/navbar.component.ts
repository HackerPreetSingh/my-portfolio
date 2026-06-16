import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { timer } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})

export class NavbarComponent implements OnInit {


  firstText:string="Hello there, My Name is Hempreet Singh";
  secondText:string="I am a Software Engineer. Do you want to view my work?";
  buttonText:string="View my Work 🤔";
  smilieText:string="";
  // 🢂
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mouseEnter(){
    this.buttonText="View my Work 😀";
    this.secondText="I am a Software Engineer. Do you want to view my work?";
  }

  mouseLeave(){
    this.buttonText="View my Work 🤔";
    this.secondText="I am a Software Engineer. Do you want to view my work?";
  }

//   clickButton(){
//     const button = document.getElementById('btn');
//     button?.addEventListener('click', function handleClick(event) {
//       timer(2).subscribe(x => {
//         alert("button clicked");
//         return "location.href='#content'";
//       });
//     });
//   }
}
