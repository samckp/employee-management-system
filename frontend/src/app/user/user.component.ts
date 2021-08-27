import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  users: User[] ;
  constructor(private userSerive: UserService) { }

  ngOnInit(): void {

      this.userSerive.getUsers().subscribe((data: User[]) =>{

          console.log(data);
          this.users = data;
      });
  }

}
