import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.less']
})
export class SportComponent implements OnInit {
  sports: Sport[];
  selectedSport: Sport;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.get('api/sport/').subscribe(res => {
      console.log(res);
      
      this.sports = res;
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewSport(this.selectedSport) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteSport(this.selectedSport) }
    ];
  }

  viewSport(select: Sport) {
    console.log(JSON.stringify(select));

  }
  deleteSport(select: Sport) {
    this.apiService.delete('api/sport/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
  addPub(name:string,location:string,date:Date,time:string,description:string,type:string, equipment_needed:string)
  {
    const newSport = new Sport(name,location,date,time,description,type,equipment_needed);
    this.apiService.post('api/sport/',newSport).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }

}

class Sport {
  id:number;
  name: string;
  location: string;
  date:Date
  time:string;
  description:string;
  type:string;
  equipment_needed:string;
  constructor (name?:string,location?:string,date?:Date,time?:string,description?:string,type?:string,equipment_needed?:string){
    this.name=name;
    this.location=location;
    this.date=date;
    this.time=time;
    this.description=description;
    this.time=time;
    this.equipment_needed=equipment_needed;
  }
}
