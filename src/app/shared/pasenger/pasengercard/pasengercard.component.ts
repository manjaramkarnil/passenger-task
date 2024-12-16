import { Component, Input, OnInit } from '@angular/core';
import { Ipasenger } from '../module/module';
import { PasengerService } from '../service/pasenger.service';

@Component({
  selector: 'app-pasengercard',
  templateUrl: './pasengercard.component.html',
  styleUrls: ['./pasengercard.component.scss']
})
export class PasengercardComponent implements OnInit {

@Input()getcard ! : Ipasenger

isEdit : boolean = false

  constructor( private updateservice : PasengerService) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.isEdit = ! this.isEdit
  }
  onupdate(name : string){
    
    this.isEdit = ! this.isEdit
    let updateobj = {
      ...this.getcard,
      fullname : name
      
    }
    
    this.updateservice.updatepasengername(updateobj)
  
    
  }

  onDelet(id :number){

    this.updateservice.remove(id)

  }


}
