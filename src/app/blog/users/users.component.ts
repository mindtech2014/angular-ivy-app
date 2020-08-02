import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  constructor(private userService: UserService) { 


  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers () {
    this.userService.getUsers().subscribe(users=> this.users = users);
  }

  public userSelected(user:User):void{
    console.log(user);
  }
 clickMessage = '';
   onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}