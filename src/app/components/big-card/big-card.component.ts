import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  // criando propriedades
  @Input()  // tornando imputável
  id:string = "0"

  @Input()
  photoCover:string = ""

  @Input()
  cardDate:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  cardDescription:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
