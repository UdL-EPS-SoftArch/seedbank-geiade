import { Component, OnInit } from '@angular/core';
import { Donation } from '../donation';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-edit',
  templateUrl: './donation-edit.component.html',
  styleUrls: ['./donation-edit.component.css']
})
export class DonationEditComponent implements OnInit{
  public donation: Donation = new Donation();
  public donationId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.donationId = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(this.donationId).subscribe(
      (donation: Donation) => this.donation = donation );
  }

  onSubmit(): void {
    this.donationService.patchResource(this.donation).subscribe(
      (patchedDonation: Donation) => {
        this.router.navigate([patchedDonation.uri]);
      });
  }
}
