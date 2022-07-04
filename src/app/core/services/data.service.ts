import { Injectable } from '@angular/core';
import {data} from './data-json';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): Data {
    return data;
  }
}
