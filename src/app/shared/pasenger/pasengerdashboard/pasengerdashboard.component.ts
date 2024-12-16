import { Component, OnInit } from '@angular/core';
import { Ipasenger } from '../module/module';
import { PasengerService } from '../service/pasenger.service';

@Component({
  selector: 'app-pasengerdashboard',
  templateUrl: './pasengerdashboard.component.html',
  styleUrls: ['./pasengerdashboard.component.scss']
})
export class PasengerdashboardComponent implements OnInit {

  passenger ! : Array<Ipasenger>

  constructor( private _pasenger : PasengerService) { }

  ngOnInit(): void {
    this.passenger = this._pasenger.fetchAllPasengers()
  }

}
