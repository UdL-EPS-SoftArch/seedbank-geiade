import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Take } from './take';

@Injectable({providedIn: 'root'})
export class TakeService extends HateoasResourceOperation<Take> {

  constructor() {
    super(Take);
  }
}