import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface user {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:3000/users';

  getAll() {
    return this.http.get<user[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<user>(this.baseUrl + '/' + id);
  }

  create(user: user) {
    return this.http.post<user>(this.baseUrl, user).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
