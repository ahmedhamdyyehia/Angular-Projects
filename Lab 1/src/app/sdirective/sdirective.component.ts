import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdirective',
  templateUrl: './sdirective.component.html',
  styleUrls: ['./sdirective.component.scss']
})
export class SDirectiveComponent implements OnInit {

  constructor() { }
IsActive=true;
IsLoggin=true;
UserName="ahmed"

  ngOnInit(): void {
  }

}
