import { Component, OnInit, ViewChild } from '@angular/core';
import { Com2Component } from './components/com2/com2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  title = 'CodeMobiles';
  version = 1;
  timeVar = 0;
  @ViewChild("com2") c2:Com2Component;

  ngOnInit(): void {
    setInterval(()=>{
      this.timeVar = Date.now();
    },1000)
  }

  onClickApp(){
    this.version = this.version +1;
  }

  updateC2ViewChild(){
    this.c2.count = 111;
  }

  reset(value){
    this.version = value;
  }
}
