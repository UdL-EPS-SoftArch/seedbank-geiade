import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { Router } from '@angular/router';
import { BatchService } from '../batch.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-batch-add',
  templateUrl: './batch-add.component.html',
  styleUrls: ['./batch-add.component.css']
})
export class BatchAddComponent implements OnInit{
  public batch: Batch;
  public user: User;

  constructor(private router: Router,
              private batchService: BatchService,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.batch = new Batch();
    this.userService.getResource(this.getCurrentUserName()).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.batch.by = this.user;
    this.batchService.createResource({ body: this.batch }).subscribe(
      (batch) => {
        this.router.navigate([batch.uri]);
      });
  }

  onCancel(): void {
    this.router.navigate(["/batchs"])
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
