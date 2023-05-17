import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-edit',
  templateUrl: './batch-edit.component.html',
  styleUrls: ['./batch-edit.component.css']
})
export class BatchEditComponent implements OnInit{
  public batch: Batch = new Batch();
  public batchId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private batchService: BatchService) {
  }

  ngOnInit(): void {
    this.batchId = this.route.snapshot.paramMap.get('id');
    this.batchService.getResource(this.batchId).subscribe(
      (batch: Batch) => this.batch = batch );
  }

  onSubmit(): void {
    this.batchService.patchResource(this.batch).subscribe(
      (patchedDonation: Batch) => {
        this.router.navigate([patchedDonation.uri]);
      });
  }
}
