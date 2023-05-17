import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { ActivatedRoute } from '@angular/router';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {

  public batch: Batch = new Batch();
  public batchId;

  constructor(
    private route: ActivatedRoute,
    private batchService : BatchService
  ) {}

  ngOnInit(): void {
    this.batchId= this.route.snapshot.paramMap.get('id');
    this.batchService.getResource(this.batchId).subscribe((batch) => {
      this.batch = batch;
    });
  }
}

  
