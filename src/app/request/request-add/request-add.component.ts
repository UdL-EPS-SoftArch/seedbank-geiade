import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit{
  public request: Request;
  public user: User;

  constructor(private router: Router,
              private requestService: RequestService,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.request = new Request();
    this.userService.getResource(this.getCurrentUserName()).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.request.by = this.user;
    this.requestService.createResource({ body: this.request }).subscribe(
      (request) => {
        this.router.navigate([request.uri]);
      });
  }

  onCancel(): void {
    this.router.navigate(["/requests"])
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}