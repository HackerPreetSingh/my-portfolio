import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  docData,
  collection,
  collectionData,
  setDoc
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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

    return docData(ref).pipe(
      tap(data => this.setCache(cacheKey, data))
    ) as Observable<T>;
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

    return collectionData(ref, {
      idField: 'id'
    }).pipe(
      tap(data => this.setCache(cacheKey, data))
    ) as Observable<T[]>;
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

  async seedSkills() {

    const skills = [
      { name: 'Java', percentage: 95, displayOrder: 1 },
      { name: 'Spring Boot', percentage: 95, displayOrder: 2 },

      { name: 'Microservices Architecture', percentage: 95, displayOrder: 3 },
      { name: 'AWS', percentage: 85, displayOrder: 4 },

      { name: 'Apache Kafka', percentage: 90, displayOrder: 5 },
      { name: 'Spring Security', percentage: 85, displayOrder: 6 },

      { name: 'Spring Data JPA', percentage: 90, displayOrder: 7 },
      { name: 'REST APIs', percentage: 95, displayOrder: 8 },

      { name: 'Docker', percentage: 80, displayOrder: 9 },
      { name: 'Kubernetes', percentage: 70, displayOrder: 10 },

      { name: 'MySQL', percentage: 85, displayOrder: 11 },
      { name: 'Redis', percentage: 75, displayOrder: 12 },

      { name: 'Apache Camel', percentage: 90, displayOrder: 13 },
      { name: 'Jenkins', percentage: 85, displayOrder: 14 },

      { name: 'GitHub Actions', percentage: 80, displayOrder: 15 },
      { name: 'Splunk', percentage: 90, displayOrder: 16 },

      { name: 'SignalFx', percentage: 75, displayOrder: 17 },
      { name: 'Resilience4j', percentage: 80, displayOrder: 18 },

      { name: 'Spring Cloud Gateway', percentage: 80, displayOrder: 19 },
      { name: 'Git', percentage: 90, displayOrder: 20 },

      { name: 'Postman', percentage: 90, displayOrder: 21 },
      { name: 'Firebase', percentage: 75, displayOrder: 22 },

      { name: 'Python', percentage: 75, displayOrder: 23 },
      { name: 'Jira', percentage: 90, displayOrder: 24 }
    ];

    for (const skill of skills) {
      const skillRef = doc(
        this.firestore,
        `skills/${skill.displayOrder}`
      );

      await setDoc(skillRef, skill);
    }

    console.log('Skills seeded successfully');
  }
}