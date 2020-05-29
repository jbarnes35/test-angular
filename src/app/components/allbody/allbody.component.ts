import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-allbody',
  templateUrl: './allbody.component.html',
  styleUrls: ['./allbody.component.css']
})
export class AllbodyComponent implements OnInit {
  //-------------------------------------------------------//
  starClassName = "star-rating-blank";
  @Input() starId;
  @Input() rating;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  //----------------------------------------------------------//

  constructor() { }

  ngOnInit() {
    //-------------------------------------------------//
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }

    //---------------------------------------------------//
  }


  //------------------------------//
  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }
  //--------------------------------//


}
