import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit{
  public request: Request = new Request();
  public requestId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(this.requestId).subscribe(
      (request: Request) => this.request = request );
  }

  onSubmit(): void {
    this.requestService.patchResource(this.request).subscribe(
      (patchedrequest: Request) => {
        this.router.navigate([patchedrequest.uri]);
      });
  }
}
