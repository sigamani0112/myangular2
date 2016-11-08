import {Component} from '@angular/core';
import {MyMoneyRecord} from './myMoneyRecord';

@Component({
  moduleId: module.id,  
  selector: 'form1',
  templateUrl: 'form1.component.html'
})

export class Form1Component{

  myAccTypeList = ['Expense','Income'];
  count:number = 1;
  currDate:Date = new Date();
  today: number = Date.now();
  model = new MyMoneyRecord(this.count++,0,this.myAccTypeList[0],'2016-01-10');
  submitted = false;
  myMoneyRecords : MyMoneyRecord[] = [];
  onSubmit(){
    this.submitted = true;
    console.log(this.today+"--Form1Component Submitted date - "+this.model.usrAmountDate);
    this.myMoneyRecords.push(new MyMoneyRecord(
      this.model.pid,
      this.model.usrAmount,
      this.model.usrAmountType,
      this.model.usrAmountDate
    ))
  }
  active = true;
}