import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Batch } from './batch';

@Injectable({providedIn: 'root'})
export class BatchService extends HateoasResourceOperation<Batch> {

  constructor() {
    super(Batch);
  }
}