import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  IndexNumber:number=0;
  goals:any;
  constructor(private route: ActivatedRoute,private router:Router,private _data:DataService) { 
    this.IndexNumber = route.snapshot.params['id'];
  }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
  }
SendHome()
{
  this.router.navigate(['']);
}
}
