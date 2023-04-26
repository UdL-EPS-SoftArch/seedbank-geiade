import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Propagator } from '../propagator';
import { PropagatorService } from '../propagator.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-propagator-list',
  templateUrl: './propagator-list.component.html',
  styleUrls: ['./propagator-list.component.css']
})
export class PropagatorListComponent {
  public propagators: Propagator[] = [];
  public pageSize = 5;
  public page = 1;
  public totalpropagators = 0;

  constructor(
    public router: Router,
    private propagatorService: PropagatorService) {
  }

  ngOnInit(): void {
    debugger;
    this.propagatorService.getPage({ pageParams:  { size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Propagator>) => {
          this.propagators = page.resources;
          this.totalpropagators = page.totalElements;
        });
  }

  changePage(): void {
    this.propagatorService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Propagator>) => this.propagators = page.resources);
  }

  detail(propagator: Propagator): void {
    this.router.navigate(['propagators', propagator.id]);
  }

}
