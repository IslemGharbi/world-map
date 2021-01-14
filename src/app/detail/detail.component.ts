import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  name;
  country;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
    this.name=event.pay;
   });
 this.country=this.httpService.getDetails(this.name);
 console.log(this.country);
 
  }

}
