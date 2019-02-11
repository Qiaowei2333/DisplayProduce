import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Produce } from '../models/produce';

@Component({
  selector: 'app-produce-detail',
  templateUrl: './produce-detail.component.html',
  styleUrls: ['./produce-detail.component.css']
})
export class ProduceDetailComponent implements OnInit, OnChanges {
  @Input() produceList: Produce[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      this.produceList = changes.produceList.currentValue;
      console.log(this.produceList);
  }

}