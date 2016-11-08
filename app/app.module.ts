import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { UserFormComponent } from './user-form.component';

import { MyHeaderComponent } from './myheader.component';
import { Form1Component }      from './form1.component';
import { Form2Component }  from './form2.component';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { MyMoneyRecordService } from './myMoneyRecord.service';



@NgModule({   
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule ,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyHeaderComponent,
    Form1Component,
    Form2Component
  ],
  providers: [ MyMoneyRecordService ] ,
  bootstrap: [ AppComponent ]
})

export class AppModule{

}