import { Component, OnInit } from '@angular/core';
import { Donation } from '../donation';
import { Router } from '@angular/router';
import { DonationService } from '../donation.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-donation-add',
  templateUrl: './donation-add.component.html',
  styleUrls: ['./donation-add.component.css']
})
export class DonationAddComponent implements OnInit{
  public donation: Donation;
  public user: User;

  constructor(private router: Router,
              private donationService: DonationService,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.donation = new Donation();
    this.userService.getResource(this.getCurrentUserName()).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.donation.by = this.user;
    this.donationService.createResource({ body: this.donation }).subscribe(
      (donation) => {
        this.router.navigate([donation.uri]);
      });
  }

  onCancel(): void {
    this.router.navigate(["/donations"])
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
