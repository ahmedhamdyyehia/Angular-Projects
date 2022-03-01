import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templte-refreance',
  templateUrl: './templte-refreance.component.html',
  styleUrls: ['./templte-refreance.component.scss']
})
export class TemplteRefreanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logmsg(iName:any){
    console.log("wellocme to angular")
    console.log(iName)

  }

}
