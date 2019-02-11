import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
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
  
  constructor(private produceService: ProduceService) {}
  
  ngOnInit(): void {
    this.detectInputChanges();
   }

  detectInputChanges(): void {
    this.myControl.valueChanges
    .pipe(
      debounceTime(300),
    )
    .subscribe(
      name => {
        if(name.trim() == '') {
          this.options = [];
        }
        else {
          this.loadingIsDone = false;
          this.produceService.getProduce(name).subscribe(
            res => {
              this.produceList = res;
              this.options = res.map(produce => produce.name);
              this.loadingIsDone = true;
              console.log(this.produceList);
            }
          );
        }
      }
    );
  }
}
