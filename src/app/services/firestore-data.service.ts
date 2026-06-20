import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs
} from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  private readonly CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

  constructor(private firestore: Firestore) { }

  getDocument<T>(
    collectionName: string,
    documentId: string
  ): Observable<T> {

    const cacheKey =
      `portfolio_${collectionName}_${documentId}`;

    const cached = this.getCache<T>(cacheKey);

    if (cached) {
      console.log(`Cache hit: ${cacheKey}`);
      return of(cached);
    }

    console.log(`Firestore hit: ${cacheKey}`);

    const ref = doc(
      this.firestore,
      `${collectionName}/${documentId}`
    );

    return from(getDoc(ref)).pipe(
      map(snapshot => snapshot.data() as T),
      tap(data => this.setCache(cacheKey, data))
    );
  }

  getCollection<T>(
    collectionName: string
  ): Observable<T[]> {

    const cacheKey =
      `portfolio_${collectionName}_collection`;

    const cached = this.getCache<T[]>(cacheKey);

    if (cached) {
      console.log(`Cache hit: ${cacheKey}`);
      return of(cached);
    }

    console.log(`Firestore hit: ${cacheKey}`);

    const ref = collection(
      this.firestore,
      collectionName
    );

    return from(getDocs(ref)).pipe(
      map(snapshot =>
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[]
      ),
      tap(data => this.setCache(cacheKey, data))
    );
  }

  private getCache<T>(key: string): T | null {

    const cachedItem = localStorage.getItem(key);

    if (!cachedItem) {
      return null;
    }

    const parsed = JSON.parse(cachedItem);

    const isExpired =
      Date.now() - parsed.timestamp > this.CACHE_TTL;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  }

  private setCache(
    key: string,
    data: any
  ): void {

    localStorage.setItem(
      key,
      JSON.stringify({
        timestamp: Date.now(),
        data
      })
    );
  }

  clearPortfolioCache(): void {

    Object.keys(localStorage)
      .filter(key => key.startsWith('portfolio_'))
      .forEach(key => localStorage.removeItem(key));
  }

  // async seedSkills() {

  //   const skills = [
  //     { name: 'Java', percentage: 95, displayOrder: 1 },
  //     { name: 'Spring Boot', percentage: 95, displayOrder: 2 },

  //     { name: 'Microservices Architecture', percentage: 95, displayOrder: 3 },
  //     { name: 'AWS', percentage: 85, displayOrder: 4 },

  //     { name: 'Apache Kafka', percentage: 90, displayOrder: 5 },
  //     { name: 'Spring Security', percentage: 85, displayOrder: 6 },

  //     { name: 'Spring Data JPA', percentage: 90, displayOrder: 7 },
  //     { name: 'REST APIs', percentage: 95, displayOrder: 8 },

  //     { name: 'Docker', percentage: 80, displayOrder: 9 },
  //     { name: 'Kubernetes', percentage: 70, displayOrder: 10 },

  //     { name: 'MySQL', percentage: 85, displayOrder: 11 },
  //     { name: 'Redis', percentage: 75, displayOrder: 12 },

  //     { name: 'Apache Camel', percentage: 90, displayOrder: 13 },
  //     { name: 'Jenkins', percentage: 85, displayOrder: 14 },

  //     { name: 'GitHub Actions', percentage: 80, displayOrder: 15 },
  //     { name: 'Splunk', percentage: 90, displayOrder: 16 },

  //     { name: 'SignalFx', percentage: 75, displayOrder: 17 },
  //     { name: 'Resilience4j', percentage: 80, displayOrder: 18 },

  //     { name: 'Spring Cloud Gateway', percentage: 80, displayOrder: 19 },
  //     { name: 'Git', percentage: 90, displayOrder: 20 },

  //     { name: 'Postman', percentage: 90, displayOrder: 21 },
  //     { name: 'Firebase', percentage: 75, displayOrder: 22 },

  //     { name: 'Python', percentage: 75, displayOrder: 23 },
  //     { name: 'Jira', percentage: 90, displayOrder: 24 }
  //   ];

  //   for (const skill of skills) {

  //     const skillRef = doc(
  //       this.firestore,
  //       `skills/${skill.displayOrder}`
  //     );

  //     await setDoc(skillRef, skill);
  //   }

  //   console.log('Skills seeded successfully');
  // }

  async seedEducation() {

  const educationList = [

    {
      title: '10th Standard',
      institution: 'Hartmann College',
      score: '89%',
      year: '2015',
      details: 'All General Subjects',
      imageUrl: 'assets/images/educationInstitutions/Hartmann_College.jpg',
      website: 'https://hartmanncollege.org/',
      displayOrder: 1
    },

    {
      title: '12th Standard',
      institution: 'G.R.M. School',
      score: '89%',
      year: '2017',
      details: 'P.C.M. with Computer',
      imageUrl: 'assets/images/educationInstitutions/grm.jpg',
      website: 'https://www.grmschool.com/',
      displayOrder: 2
    },

    {
      title: 'Graduation',
      institution: 'M.S.I.T.',
      score: '89.1%',
      course: 'B.Tech (E.C.E.)',
      details: 'Duration : 2017 - 2021',
      imageUrl: 'assets/images/educationInstitutions/msit.jpg',
      website: 'https://www.msit.in/',
      displayOrder: 3
    }

  ];

  for (const education of educationList) {

    const educationRef = doc(
      this.firestore,
      `education/${education.displayOrder}`
    );

    await setDoc(educationRef, education);
  }

  console.log('Education seeded successfully');
}
}
