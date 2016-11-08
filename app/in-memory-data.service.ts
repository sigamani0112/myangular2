import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let myMoneyRecords = [
      {pid:111,usrAmount:12,usrAmountType:'Expense',usrAmountDate:'2016-11-08'}
    ];
    return {myMoneyRecords};
  }
}

