import { Component, OnInit } from '@angular/core';
import { Take } from '../take';
import { ActivatedRoute } from '@angular/router';
import { TakeService } from '../take.service';

@Component({
  selector: 'app-take-detail',
  templateUrl: './take-detail.component.html',
  styleUrls: ['./take-detail.component.css']
})
export class TakeDetailComponent implements OnInit {

  public take: Take = new Take();
  public takeId;

  constructor(
    private route: ActivatedRoute,
    private takeService : TakeService
  ) {}

  ngOnInit(): void {
    this.takeId= this.route.snapshot.paramMap.get('id');
    this.takeService.getResource(this.takeId).subscribe((take) => {
      this.take = take;
    });
  }
}

  
