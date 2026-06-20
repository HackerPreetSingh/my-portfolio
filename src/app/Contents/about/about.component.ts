import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../../services/firestore-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {

  aboutTextQuestion = 'Who is this?';

  aboutTextAnswer =
    'My name is Hempreet Singh and I am a Full Stack Java Developer. With too much eagerness to learn new things, I always try to imbibe and enculcate the new technical as well as non-technical skills within no time';

  resumeLink =
    'https://drive.google.com/file/d/1WSZ8IeJXlsfaegnmNg4PPdt21-rx0t5T/view?usp=drive_link';

  profileImageUrl = '../../../assets/images/self/own.jpg';

  skills: any[] = [];

  constructor(
    private firestoreDataService: FirestoreDataService
  ) {}

  ngOnInit(): void {

    // this.firestoreDataService.seedSkills();
  
    this.firestoreDataService
      .getDocument<any>('profile', 'main')
      .subscribe({
        next: (profile) => {
          this.aboutTextQuestion = profile.aboutTextQuestion;
          this.aboutTextAnswer = profile.aboutTextAnswer;
          this.resumeLink = profile.resumeLink;
          this.profileImageUrl = profile.profileImageUrl;
        }
      });

    this.firestoreDataService
      .getCollection<any>('skills')
      .subscribe(skills => {

        this.skills = skills.sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

      });
  }
}
