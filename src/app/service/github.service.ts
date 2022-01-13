import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGithub } from '../developer-profile';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getDeveloperProfile(username: string): Observable<ResponseGithub> {
    return this.http.get<ResponseGithub>(
      `https://api.github.com/users/${username}`
    );
  }
}
