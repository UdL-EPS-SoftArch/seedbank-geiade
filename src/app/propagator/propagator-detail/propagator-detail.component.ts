import { Component, OnInit } from '@angular/core';
import { Propagator } from '../propagator';
import { ActivatedRoute } from '@angular/router';
import { PropagatorService } from '../propagator.service';

@Component({
  selector: 'app-propagator-detail',
  templateUrl: './propagator-detail.component.html',
  styleUrls: ['./propagator-detail.component.css'],
})
export class PropagatorDetailComponent implements OnInit {
  public propagator: Propagator = new Propagator();
  public propagatorId;

  constructor(
    private route: ActivatedRoute,
    private propagatorService: PropagatorService
  ) {}

  ngOnInit(): void {
    this.propagatorId = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(this.propagatorId).subscribe((propagator) => {
      this.propagator = propagator;
    });
  }
}
