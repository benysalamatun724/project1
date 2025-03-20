import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private readonly API_URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.API_URL).pipe(
      map((response: any[]) => response.map(user => ({
        id: user.id,
        login: user.login,
        avatarUrl: user.avatar_url,
        url: user.url
      }))),
    );
  }
}
