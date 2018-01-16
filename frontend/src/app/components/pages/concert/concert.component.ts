import { Component, OnInit } from '@angular/core';
import {GalleriaModule} from 'primeng/primeng';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { error } from 'selenium-webdriver';
import {ToolbarModule} from 'primeng/primeng';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.less']
})
export class ConcertComponent implements OnInit {
  data: any;
  concerts: Concert[];
  selectedConcert: Concert;
  items: MenuItem[];
  constructor(private apiService: ApiService) {
     this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'Octomber','November','December'],
      datasets: [
          {
              label: 'Classic Music',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55]
          },
          {
              label: 'Other Music',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, ]
          }
      ]
  }
   }
  
  images: any[];

  ngOnInit() {

    this.apiService.get('api/concert/').subscribe(res => {
      console.log(res);
      
      this.concerts = res;
   
        this.images = [];
        this.images.push({source:'assets/images/brasov.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'assets/images/cinema.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'assets/images/sport.jpg', alt:'Description for Image 3', title:'Title 3'});
       
  });
  this.items = [
    { label: 'View', icon: 'fa-search', command: (event) => this.viewConcert(this.selectedConcert) },
    { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteConcert(this.selectedConcert) }
  ];
  }
  viewConcert(select: Concert) {
    console.log(JSON.stringify(select));

  }
  deleteConcert(select: Concert) {
    this.apiService.delete('api/concert/' + select.id).subscribe(res => {
      console.log(res);
    });

  }

  countClassic(select: Concert) {
    var i=0;
    if(JSON.stringify(select.gendre)=='classic')
    {
      i++;
    }
    console.log(i)

  }
  countOther(select: Concert) {
    var i=0;
    if(JSON.stringify(select.gendre)!='classic')
    {
      i++;
    }
    console.log(i)

  }


  
  addConcert(name:string,band:string,date:Date, time:string, gendre:string)
  {
    const newConcert = new Concert(name,band, date, time, gendre);
    this.apiService.post('api/concert/',newConcert).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }

}


class Concert {
  id:number;
  name: string;
  band: string;
  date: Date;
  time:string
  gendre:String
  constructor (name?:string,band?:string,date?:Date,time?:string,gendre?:string){
    this.name=name;
    this.band=band;
    this.date=date;
    this.time=time;
    this.gendre=gendre;
  }
}
