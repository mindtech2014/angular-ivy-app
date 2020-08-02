import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  constructor(private userService: UserService,private router:Router) { 
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers () {
    this.userService.getUsers().subscribe(users=> this.users = users);
  }

  public userSelected(user:User):void{
    console.log(user);
    this.router.navigateByUrl('/blog/posts/' + user.id);
  }
 clickMessage = '';
   onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}