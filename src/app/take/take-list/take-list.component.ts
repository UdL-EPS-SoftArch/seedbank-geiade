import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Take } from '../take';
import { TakeService } from '../take.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-take-list',
  templateUrl: './take-list.component.html',
  styleUrls: ['./take-list.component.css']
})
export class TakeListComponent {
  public takes: Take[] = [];
  public pageSize = 5;
  public page = 1;
  public totaltakes = 0;

  constructor(
    public router: Router,
    private takeService: TakeService) {
  }

  ngOnInit(): void {
    debugger;
    this.takeService.getPage({ pageParams:  { size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Take>) => {
          this.takes = page.resources;
          this.totaltakes = page.totalElements;
        });
  }

  changePage(): void {
    this.takeService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Take>) => this.takes = page.resources);
  }

  detail(take: Take): void {
    this.router.navigate(['takes', take.id]);
  }

}
