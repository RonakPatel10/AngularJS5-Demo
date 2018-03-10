import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
//import { Transform } from 'stream';
import{DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals',[
      transition('*=>*',[
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter',stagger('1000ms',[
animate('.6s ease-in',keyframes([
  style({opacity:0,transform:'translateY(-75%)',offset:0}),
  style({opacity:.5,transform:'translateY(35px)',offset:.3}),
  style({opacity:1,transform:'translateY(0)',offset:1}),
]))
        ]),
        {optional:true}),
        query(':leave',stagger('1000ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1,transform:'translateY(0)',offset:0}),
            style({opacity:.5,transform:'translateY(35px)',offset:.3}),
            style({opacity:0,transform:'translateY(-75%)',offset:1}),
          ]))
                  ]),
                  {optional:true})
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {
  goalCount:number=4;
  btnText:string='Scoring Goal';
  goalText:string='Real Madrid';
  goals=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
    this._data.ChangeGoal(this.goals);
    this.goalCount=this.goals.length;
  }
AddItem()
{
  this.goals.push(this.goalText);
  this.goalText='';
  this.goalCount=this.goals.length;
  this._data.ChangeGoal(this.goals);
}
RemoveItem(i)
{
  this.goals.splice(i,1);
  this.goalText='';
  this.goalCount=this.goals.length;
  this._data.ChangeGoal(this.goals);

}
}
