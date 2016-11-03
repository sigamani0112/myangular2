import { Component } from '@angular/core';
import { User }    from './user';

@Component({ 
  moduleId: module.id,  
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})

export class UserFormComponent{

  sexList = ['Male', 'Female'];
  users : User[] = [] ;
  
            
  model = new User(18, 'firstname' , 'lastname' ,this.sexList[0], 'city');
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    this.users.push(new User(
      15,
      this.model.firstName,
      this.model.lastName,
      this.model.sex,
      this.model.city
    );
    //form.controls['name'].value
    
  }
  active = true;
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  //userss ;
  get diagnostic1() { 
     //users = JSON.stringify(this.model); 
     return this.model.city;
    }
}