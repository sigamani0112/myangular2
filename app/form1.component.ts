import {Component,OnInit} from '@angular/core';
import {MyMoneyRecord} from './myMoneyRecord';

import {MyMoneyRecordService} from './myMoneyRecord.service';


@Component({
  moduleId: module.id,  
  selector: 'form1',
  templateUrl: 'form1.component.html'
})

export class Form1Component implements OnInit {
  myMoneyRecords : MyMoneyRecord[] = [];
  constructor(
    private myMoneyRecordService:MyMoneyRecordService
  ){}

  myAccTypeList = ['Expense','Income'];
  count:number = 1;
  currDate:Date = new Date();
  today: number = Date.now();
  
  model = new MyMoneyRecord(this.count,0,this.myAccTypeList[0],'2016-01-10');
  submitted = false;
  
  onSubmit(){
    this.submitted = true;
    console.log("count in before -- "+this.count);
    this.add(this.count,this.model.usrAmount,this.model.usrAmountType,this.model.usrAmountDate);
    console.log(this.today+"--Form1Component Submitted date - "+this.model.usrAmountDate);
    this.count = this.count +1;
    console.log("count in submit -- "+this.count);
    //this.myMoneyRecords.push(new MyMoneyRecord(
     // this.model.pid,
     // this.model.usrAmount,
     // this.model.usrAmountType,
     // this.model.usrAmountDate
    //));
  }
  active = true;

  getMyMoneyRecords(): void {
    this.myMoneyRecordService
        .getMyMoneyRecords()
        .then(myMoneyRecords => this.myMoneyRecords = myMoneyRecords);
  }

  add(pid: number,usrAmount:number,usrAmountType:string,usrAmountDate:string): void {
    //name = name.trim();
    //if (!name) { return; }
    this.myMoneyRecordService.create(pid,usrAmount,usrAmountType,usrAmountDate)
      .then(hero => {
        this.myMoneyRecords.push(hero);
      });
  }

  ngOnInit(): void {
    this.getMyMoneyRecords();
  }
}