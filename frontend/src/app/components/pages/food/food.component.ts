import { Component, OnInit } from '@angular/core';
//import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ApiService } from '../../../service/api.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.less']
})
export class FoodComponent implements OnInit {

  foods: Food[];
  selectedFood: Food;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/food/').subscribe(res => {
      console.log(res);
      
      this.foods = res;
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewFood(this.selectedFood) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteFood(this.selectedFood) }
    ];
  }
  viewFood(select: Food) {
    console.log(JSON.stringify(select));

  }
  deleteFood(select: Food) {
    this.apiService.delete('api/food/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
  addFood(name:string, location:string, type:string, program:string)
  {
    const newFood = new Food(name,location, type, program);
    this.apiService.post('api/food/',newFood).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }
}
class Food {
  id:number;
  name: string;
  location: string;
  type:string;
  program:string;
  constructor (name?:string,location?:string, type?:string, program?:string) {
    this.name=name;
    this.location=location;
   this.type=type;
   this.program=program;
  }
}
