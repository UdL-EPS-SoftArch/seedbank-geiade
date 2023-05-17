import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from 'src/app/batch/batch';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-delete',
  templateUrl: './batch-delete.component.html',
  styleUrls: ['./batch-delete.component.css']
})
export class BatchDeleteComponent implements OnInit{
  public batch: Batch = new Batch();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private batchService: BatchService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.batchService.getResource(this.id).subscribe(
      batch => this.batch = batch);
  }

  delete(): void {
    this.batchService.deleteResource(this.batch).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}

