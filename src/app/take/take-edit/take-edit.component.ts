import { Component, OnInit } from '@angular/core';
import { Take } from '../take';
import { ActivatedRoute, Router } from '@angular/router';
import { TakeService } from '../take.service';

@Component({
  selector: 'app-take-edit',
  templateUrl: './take-edit.component.html',
  styleUrls: ['./take-edit.component.css']
})
export class TakeEditComponent implements OnInit{
  public take: Take = new Take();
  public takeId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private takeService: TakeService) {
  }

  ngOnInit(): void {
    this.takeId = this.route.snapshot.paramMap.get('id');
    this.takeService.getResource(this.takeId).subscribe(
      (take: Take) => this.take = take );
  }

  onSubmit(): void {
    this.takeService.patchResource(this.take).subscribe(
      (patchedDonation: Take) => {
        this.router.navigate([patchedDonation.uri]);
      });
  }
}
