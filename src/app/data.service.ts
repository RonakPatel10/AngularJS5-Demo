import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
private goals=new BehaviorSubject<any>(['Real Madrid','Saint Peris German']);
goal=this.goals.asObservable();
  constructor() { }
ChangeGoal(goal)
{
  this.goals.next(goal);
}
}
