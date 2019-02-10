import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, switchMap, debounceTime, startWith} from 'rxjs/operators';
import { ProduceService } from '../services/produce.service';
import { Produce } from '../models/produce';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options: string[] = [];
  filteredOptions: string[];
  produceList: Produce[];
  loadingIsDone: boolean = true;
  selectedProduce: Produce;
  
  mockData: Produce[] = [
    {
      name: "produce11",
      category: "Food",
      brand: "GoodBrand",
      "price per pound": "1",
      availability: true,
      "location in store": {
        aisle: "2F"
      }
    },
    {
      name: "produce1010",
      category: "Food",
      brand: "GoodBrand",
      "price per pound": "1",
      availability: true,
      "location in store": {
        aisle: "2F"
      }
    },
    {
      name: "produce1111",
      category: "Food",
      brand: "GoodBrand",
      "price per pound": "1",
      availability: true,
      "location in store": {
        aisle: "2F"
      }
    }
  ]
    

  constructor(private produceService: ProduceService) {}
  
  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        debounceTime(300),
        // startWith(''),
        // switchMap(value => this.produceService.getProduce(value))
        // map(value => this._filter(value))
      )
      .subscribe(
        name => {
          // this.filteredOptions = res;
          if(name.trim() == '') {
            this.options = [];
            return;
          }
          else {
            this.loadingIsDone = false;
            // this.produceService.getProduce(name).subscribe(
            //   res => {
            //     this.produceList = res;
            //     this.options = res.map(produce => produce.name);
            //     this.loadingIsDone = true;
            //     console.log(this.produceList);
            //   }
            // );
            this.produceList = JSON.parse(JSON.stringify(this.mockData));
            this.options = this.produceList.map(produce => produce.name);
            this.loadingIsDone = true;
            
            console.log(this.produceList);
          }
        }
      );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
}
