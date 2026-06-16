import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  aboutTextQuestion:string="Who is this?";
  aboutTextAnswer:string="My name is Hempreet Singh and I am a Full Stack Java Developer. With too much eagerness to learn new things, I always try to imbibe and enculcate the new technical as well as non-technical skills within no time.";
  resumeLink:string="https://drive.google.com/file/d/1WSZ8IeJXlsfaegnmNg4PPdt21-rx0t5T/view?usp=drive_link";
  constructor() { }

  ngOnInit(): void {
  }

}
