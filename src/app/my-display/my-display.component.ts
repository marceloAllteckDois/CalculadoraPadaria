import { MyDisplay } from './../entity/displays/MyDisplay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-display',
  templateUrl: './my-display.component.html',
  styleUrls: ['./my-display.component.css']
})
export class MyDisplayComponent implements OnInit {

  myDisplay:MyDisplay=new MyDisplay();

  constructor() { }

  ngOnInit(): void {
  }

}
