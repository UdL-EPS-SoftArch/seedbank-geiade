import { Component, OnInit } from '@angular/core';
import { Donation } from '../donation';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-delete',
  templateUrl: './donation-delete.component.html',
  styleUrls: ['./donation-delete.component.css']
})
export class DonationDeleteComponent implements OnInit{
  public donation: Donation = new Donation();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(this.id).subscribe(
      donation => this.donation = donation);
  }

  delete(): void {
    this.donationService.deleteResource(this.donation).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}
