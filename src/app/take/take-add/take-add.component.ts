import { Component, OnInit } from '@angular/core';
import { Take } from '../take';
import { Router } from '@angular/router';
import { TakeService } from '../take.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-take-add',
  templateUrl: './take-add.component.html',
  styleUrls: ['./take-add.component.css']
})
export class TakeAddComponent implements OnInit{
  public take: Take;
  public user: User;

  constructor(private router: Router,
              private takeService: TakeService,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.take = new Take();
    this.userService.getResource(this.getCurrentUserName()).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.take.by = this.user;
    this.takeService.createResource({ body: this.take }).subscribe(
      (take) => {
        this.router.navigate([take.uri]);
      });
  }

  onCancel(): void {
    this.router.navigate(["/takes"])
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
