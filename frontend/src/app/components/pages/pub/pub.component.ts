import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
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
  addPub(select: Pub)
  {
    this.apiService.post('api/pub/'+select.id+select.location+select.name+select.program);

  }

}



interface Pub {
  id: number;
  name: string;s
  location: string;
  program: string;
}