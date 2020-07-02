import { Component, OnInit, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  myFavoriteColor: string

  @Output() fathDivColor = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  submitColor(color: string){
    this.myFavoriteColor = color
    this.fathDivColor.emit(
      this.myFavoriteColor
    )
  }

}
