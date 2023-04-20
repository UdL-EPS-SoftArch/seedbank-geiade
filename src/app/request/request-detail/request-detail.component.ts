import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
})
export class RequestDetailComponent implements OnInit {
  public request: Request = new Request();
  public requestId;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(this.requestId).subscribe((request) => {
      this.request = request;
    });
  }
}