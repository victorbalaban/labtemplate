import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/operator/timeInterval';
import { Data } from '@angular/router/src/config';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.less']
})
export class CinemaComponent implements OnInit {
  data: any;
  cinemas: Cinema[];
  selectedCinema: Cinema;
  items: MenuItem[];
  constructor(private apiService: ApiService) { 
    
  }
  
  ngOnInit() {
    this.data = {
      labels: [' Star Wars: The Last Jedi',' Guardians of the Galaxy Vol. 2',' Beauty and the Beast'],
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
      this.apiService.get('api/cinema/').subscribe(res => {
        console.log(res);
        
        this.cinemas = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewCinema(this.selectedCinema) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCinema(this.selectedCinema) }
      ];
  }

  viewCinema(select: Cinema) {
    console.log(JSON.stringify(select));

  }
  deleteCinema(select: Cinema) {
    this.apiService.delete('api/cinema/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
  addCinema(name:string, location:string, date: Date, time:string, genre: string, room: string)
  {
    const newCinema = new Cinema(name,location, date, time, genre, room);
    this.apiService.post('api/cinema/',newCinema).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }
  }

  class Cinema {
    id:number;
    name: string;
    location: string;
    date: Date;
    time: string;
    genre:string;
    room:string;
    constructor (name?:string,location?:string, date?:Date, time?:string, genre?:string, room?:string) {
      this.name=name;
      this.location=location;
      this.date=date;
      this.time=time;
      this.genre=genre;
      this.room=room;
    }
  }
