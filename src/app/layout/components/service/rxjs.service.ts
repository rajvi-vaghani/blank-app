import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  shareData = new BehaviorSubject([]);

  getData(item: any) {
    this.shareData.next(item);
  }
}
