import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FooterService {
  changeFilterValueEmitter = new EventEmitter<string>()
  currentFilterValue:string='all'
  constructor() {
  }

}
