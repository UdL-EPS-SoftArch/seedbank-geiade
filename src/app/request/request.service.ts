import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Request } from './request';

@Injectable({providedIn: 'root'})
export class RequestService extends HateoasResourceOperation<Request> {

  constructor() {
    super(Request);
  }
}