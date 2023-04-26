import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../donation';
import { DonationService } from '../donation.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent {
  public donations: Donation[] = [];
  public pageSize = 5;
  public page = 1;
  public totalDonations = 0;

  constructor(
    public router: Router,
    private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.donationService.getPage({ pageParams:  { size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Donation>) => {
          this.donations = page.resources;
          this.totalDonations = page.totalElements;
        });
  }

  changePage(): void {
    this.donationService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Donation>) => this.donations = page.resources);
  }

  detail(donation: Donation): void {
    this.router.navigate(['donations', donation.id]);
  }

}
