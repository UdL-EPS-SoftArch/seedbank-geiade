import { Component, OnInit } from '@angular/core';
import { Donation } from '../donation';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css'],
})
export class DonationDetailComponent implements OnInit {
  public donation: Donation = new Donation();
  public donationId;

  constructor(
    private route: ActivatedRoute,
    private donationService: DonationService
  ) {}

  ngOnInit(): void {
    this.donationId = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(this.donationId).subscribe((donation) => {
      this.donation = donation;
    });
  }
}
