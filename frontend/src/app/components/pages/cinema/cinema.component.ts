import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.less']
})
export class CinemaComponent implements OnInit {
  data: any;
  constructor() { 
    
  }

  ngOnInit() {
    this.data = {
      labels: [' Star Wars: Ultimii Jedi',' Gardienii Galaxiei Vol. 2',' Frumoasa si Bestia'],
      datasets: [
          {
              data: [574, 389, 504],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
    
  }
  

}
