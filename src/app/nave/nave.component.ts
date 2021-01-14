import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
pay='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  recherche(){
    this.router.navigate(['countries/region',this.pay])
  }

}
