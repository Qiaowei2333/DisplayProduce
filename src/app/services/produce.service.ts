import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from '../../../node_modules/rxjs';
import { Produce } from '../models/produce';

@Injectable({
  providedIn: 'root'
})
export class ProduceService {

  constructor(private apiservice: ApiService) { }

  getProduce(name: string): Observable < Produce[] > {
    return this.apiservice.getData('/produce', name);
  }
}
