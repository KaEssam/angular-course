import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { user, UserService } from '../../services/user-service';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  Service = inject(UserService);
  users: user[] = [];
  u: user = {
    id: 5,
    name: 'karim',
  };

  ngOnInit() {
    this.Service.getAll().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  addUser() {
    this.Service.create(this.u);
  }
}
