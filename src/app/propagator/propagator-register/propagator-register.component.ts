import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { PropagatorService } from '../propagator.service';
import { Propagator } from '../propagator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-propagator-register',
  templateUrl: './propagator-register.component.html'
})
export class PropagatorRegisterComponent implements OnInit {
  public propagator: Propagator;

  constructor(private router: Router,
              private location: Location,
              private propagatorService: PropagatorService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.propagator = new Propagator();
  }

  onSubmit(): void {
    this.propagator.username = this.propagator.id;
    this.propagatorService.createResource({ body: this.propagator }).subscribe(
      () => {
        this.authenticationBasicService.login(this.propagator.id, this.propagator.password).subscribe(
            (propagator: Propagator) => this.router.navigate(['propagators', propagator.id]));
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
