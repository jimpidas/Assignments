import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private route:Router) { }
  
  sendPost(post:any){
    this.messageEvent.emit(post);
  }
  
  ngOnInit(): void {
  }
  
}
