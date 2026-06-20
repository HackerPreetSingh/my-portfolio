import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';
import { Education } from 'src/pojos/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: false
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [];

  constructor(
    private firestoreDataService: FirestoreDataService
  ) {}

  ngOnInit(): void {

    this.firestoreDataService
      .getCollection<Education>('education')
      .subscribe(data => {

        this.educationList = data.sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

      });
  }
}