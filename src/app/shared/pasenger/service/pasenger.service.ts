import { Injectable } from '@angular/core';
import { Ipasenger } from '../module/module';

@Injectable({
  providedIn: 'root'
})
export class PasengerService {

  passengerArr : Array<Ipasenger>= [
    {
      id : 1,
      fullname : " rose",
      ckeakedIn : false,
      chackIndate: 234543,
      childredn : null


    }, {
      id : 1,
      fullname : " rose",
      ckeakedIn : false,
      chackIndate : null,
      childredn : [
        {name : 'ted', age:13},
        {name : "chloe", age :7}
      ]


    }
  ]

  constructor() { }

  fetchAllPasengers() :Array<Ipasenger>{
    return this.passengerArr
  }
   

  updatepasengername(updateobj: Ipasenger){
    this.passengerArr.push(updateobj)
 
  }


  remove(id:number) {
    let getindex = this.passengerArr.findIndex(todo=>{
      return todo.id = id
    })
    this.passengerArr.splice(getindex,1)
   

  }
  

}
