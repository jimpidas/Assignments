import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //title:'posts';
  postData:any[]=[];
  specifiedPost:any=[];
  show:boolean=false;
  constructor(private router:Router) { }

  AddPost(){
    this.router.navigateByUrl('/newpost');
  }
  Display(){
    this.router.navigateByUrl('/display');
  }
  totalPost(){
    this.router.navigateByUrl('/totalpost');
  }

  onFormSubmit(data:any){
    this.postData.push(data);
  }

  
  ngOnInit(): void {
  }

}
