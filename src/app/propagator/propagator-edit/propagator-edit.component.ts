import { Component, OnInit } from '@angular/core';
import { Propagator } from '../propagator';
import { ActivatedRoute, Router } from '@angular/router';
import { PropagatorService } from '../propagator.service';

@Component({
  selector: 'app-propagator-edit',
  templateUrl: './propagator-edit.component.html',
  styleUrls: ['./propagator-edit.component.css']
})
export class PropagatorEditComponent implements OnInit{
  public propagator: Propagator = new Propagator();
  public propagatorId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propagatorService: PropagatorService) {
  }

  ngOnInit(): void {
    this.propagatorId = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(this.propagatorId).subscribe(
      (propagator: Propagator) => this.propagator = propagator );
  }

  onSubmit(): void {
    this.propagatorService.patchResource(this.propagator).subscribe(
      (patchedpropagator: Propagator) => {
        this.router.navigate([patchedpropagator.uri]);
      });
  }
}
