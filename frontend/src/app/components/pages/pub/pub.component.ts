import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.less']
})
export class PubComponent implements OnInit {
  pubs: Pub[];
  selectedPub: Pub;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/pub/').subscribe(res => {
      console.log(res);
      
      this.pubs = res;
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewPub(this.selectedPub) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deletePub(this.selectedPub) }
    ];
  }
  viewPub(select: Pub) {
    console.log(JSON.stringify(select));

  }
  deletePub(select: Pub) {
    this.apiService.delete('api/pub/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
  addPub(name:string,location:string,program:string)
  {
    const newPub = new Pub(name,location,program);
    this.apiService.post('api/pub/',newPub).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }

}



class Pub {
  id:number;
  name: string;
  location: string;
  program: string;
  constructor (name?:string,location?:string,program?:string){
    this.name=name;
    this.location=location;
    this.program=program;
  }
}