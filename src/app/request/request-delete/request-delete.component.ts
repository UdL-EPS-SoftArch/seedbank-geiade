import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-delete',
  templateUrl: './request-delete.component.html',
  styleUrls: ['./request-delete.component.css']
})
export class RequestDeleteComponent implements OnInit{
  public request: Request = new Request();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(this.id).subscribe(
      request => this.request = request);
  }

  delete(): void {
    this.requestService.deleteResource(this.request).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}
