import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-region-pays',
  templateUrl: './region-pays.component.html',
  styleUrls: ['./region-pays.component.css']
})
export class RegionPaysComponent implements OnInit {
  region;
  pays;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.region=event.region;
     });
   this.pays=this.httpService.getCountries(this.region);
   console.log(this.pays);
  }

}
