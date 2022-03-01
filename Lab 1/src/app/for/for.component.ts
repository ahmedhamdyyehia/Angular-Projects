import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  constructor() { }
  car=["Bmw","mercedese"]

  ngOnInit(): void {
  }

}
