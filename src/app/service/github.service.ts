import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getDeveloperProfile(username: string): Observable<any> {
    return this.http.get<Observable<any>>(
      `https://api.github.com/users/${username}`
    );
  }
}
