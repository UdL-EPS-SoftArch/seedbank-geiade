import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Take } from 'src/app/take/take';
import { TakeService } from '../take.service';

@Component({
  selector: 'app-take-delete',
  templateUrl: './take-delete.component.html',
  styleUrls: ['./take-delete.component.css']
})
export class TakeDeleteComponent implements OnInit{
  public take: Take = new Take();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private takeService: TakeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.takeService.getResource(this.id).subscribe(
      take => this.take = take);
  }

  delete(): void {
    this.takeService.deleteResource(this.take).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}

