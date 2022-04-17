import { MyButton } from './../entity/buttons/MyButton';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {


  firstInput:number=0;
  secondInput:number=0;
  display:string="0";
  operationSelected:string="";
  operationDone:boolean=false;
  numericIcons=["0","1","2","3","4","5","6","7","8","9"];
  operationIcons=["+","-","*","/","%","√"];
  functionIcons=["CE","M","=","."];

  constructor() { }

  ngOnInit(): void {

  }
  onClickEvent(event:Event){
    let icon=(<HTMLButtonElement>event.target).textContent;
    let result=0;
    if(icon==null) icon=""
    if(this.numericIcons.includes(icon)){
      if(this.display == "0" || this.operationDone) {
        this.display=icon;
        this.operationDone=false;
      }
      else if(this.display.length<7)this.display+=icon;
    }

    else if (this.operationIcons.includes(icon)){
      if(this.firstInput==0){
        this.firstInput=Number(this.display);
        this.operationSelected=icon;
        this.display="0";
        if(icon=="√"){
          this.firstInput=Math.sqrt(this.firstInput);
          this.display=this.firstInput.toString();
        }
      }
      else if(this.operationSelected==""){
        this.operationSelected=icon;
        this.display="0";
      }
      else if(icon=="%" && this.operationSelected!=""){
        this.secondInput=Number(this.display);
        switch (this.operationSelected) {
          case "+":
            result = this.firstInput + this.firstInput*(this.secondInput/100);
            break;
          case "-":
            result = this.firstInput - this.firstInput*(this.secondInput/100);
            break;
          case "*":
            result = this.firstInput * this.firstInput*(this.secondInput/100);
            break;
          case "/":
            result = this.firstInput / this.firstInput*(this.secondInput/100);
            break;
          default: break;
        }
        this.firstInput=result;
        this.secondInput=0;
        this.operationDone=true;
        this.operationSelected="";
        this.display=result.toString();
      }
      else{
        result = this.calculation();
        this.operationSelected=icon;
      }
    }
    else if (this.functionIcons.includes(icon)){
      if(icon=="CE"){
        this.display="0";
        this.firstInput=0;
        this.secondInput=0;
        this.operationDone=false;
      }
      else if(icon=="="){
        if(this.firstInput!=0 && this.operationIcons.includes(this.operationSelected)){
          result=this.calculation();
          this.operationDone=false;
        }
      }
      else if (icon=="."){
        if(!this.display.includes("."))this.display+=".";
      }
    }
  }

  private calculation() {
    let result:number=0;
    this.secondInput=Number(this.display);
    switch (this.operationSelected) {
      case "+":
        result = this.firstInput + this.secondInput;
        break;
      case "-":
        result = this.firstInput - this.secondInput;
        break;
      case "*":
        result = this.firstInput * this.secondInput;
        break;
      case "/":
        result = this.firstInput / this.secondInput;
        break;
      default: break;
    }
    this.firstInput=result;
    this.secondInput=0;
    this.operationDone=true;
    this.operationSelected="";
    this.display=result.toString();
    return result;
  }
}
