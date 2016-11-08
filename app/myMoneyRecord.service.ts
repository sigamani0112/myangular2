import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MyMoneyRecord } from './myMoneyRecord';

@Injectable()
export class MyMoneyRecordService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private myMoneyRecordUrl = 'app/myMoneyRecords';  

    constructor(private http: Http) { }

    getMyMoneyRecords(): Promise<MyMoneyRecord[]> {
        return this.http.get(this.myMoneyRecordUrl)
               .toPromise()
               .then(response => response.json().data as MyMoneyRecord[])
               .catch(this.handleError);
    }

    create(pid:number,usrAmount:number,usrAmountType:string,usrAmountDate:string): Promise<MyMoneyRecord> {
     return this.http
      .post(this.myMoneyRecordUrl, JSON.stringify({pid:pid,usrAmount:usrAmount,usrAmountType:usrAmountType,usrAmountDate:usrAmountDate}),
         {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

}
