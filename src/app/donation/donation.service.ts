import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Donation } from './donation';

@Injectable({providedIn: 'root'})
export class DonationService extends HateoasResourceOperation<Donation> {

  constructor() {
    super(Donation);
  }
}