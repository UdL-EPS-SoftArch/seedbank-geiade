import { Component, OnInit } from '@angular/core';
import { Propagator } from '../propagator';
import { ActivatedRoute, Router } from '@angular/router';
import { PropagatorService } from '../propagator.service';

@Component({
  selector: 'app-propagator-delete',
  templateUrl: './propagator-delete.component.html',
  styleUrls: ['./propagator-delete.component.css']
})
export class PropagatorDeleteComponent implements OnInit{
  public propagator: Propagator = new Propagator();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propagatorService: PropagatorService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(this.id).subscribe(
      propagator => this.propagator = propagator);
  }

  delete(): void {
    this.propagatorService.deleteResource(this.propagator).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}