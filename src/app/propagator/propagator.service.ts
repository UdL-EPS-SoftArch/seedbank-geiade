import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Propagator } from './propagator';

@Injectable({providedIn: 'root'})
export class PropagatorService extends HateoasResourceOperation<Propagator> {

  constructor() {
    super(Propagator);
  }
}
