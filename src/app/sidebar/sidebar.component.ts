import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  active: boolean = false;
    toggled(){
        if(this.active){
          this.active = false;      
        } else {
          this.active = true; 
        }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
