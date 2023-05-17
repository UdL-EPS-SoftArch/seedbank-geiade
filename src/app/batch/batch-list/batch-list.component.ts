import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Batch } from '../batch';
import { BatchService } from '../batch.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent {
  public batchs: Batch[] = [];
  public pageSize = 5;
  public page = 1;
  public totalbatchs = 0;

  constructor(
    public router: Router,
    private batchService: BatchService) {
  }

  ngOnInit(): void {
    debugger;
    this.batchService.getPage({ pageParams:  { size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Batch>) => {
          this.batchs = page.resources;
          this.totalbatchs = page.totalElements;
        });
  }

  changePage(): void {
    this.batchService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { id: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Batch>) => this.batchs = page.resources);
  }

  detail(batch: Batch): void {
    this.router.navigate(['batchs', batch.id]);
  }

}
