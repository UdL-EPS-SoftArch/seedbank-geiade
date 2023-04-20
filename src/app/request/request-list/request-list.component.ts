import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  public requests: Request[] = [];
  public pageSize = 5;
  public page = 1;
  public totalRequests = 0;

  constructor(
    public router: Router,
    private requestService: RequestService) {
  }

  ngOnInit(): void {
    debugger;
    this.requestService.getPage({ pageParams:  { size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Request>) => {
          this.requests = page.resources;
          this.totalRequests = page.totalElements;
        });
  }

  changePage(): void {
    this.requestService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Request>) => this.requests = page.resources);
  }

  detail(request: Request): void {
    this.router.navigate(['requests', request.id]);
  }

}
