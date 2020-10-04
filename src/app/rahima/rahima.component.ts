import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rahima',
  templateUrl: './rahima.component.html',
  styleUrls: ['./rahima.component.css']
})


export class RahimaComponent implements OnInit {
  title = 'Writing Lab';
  constructor() { }
  clicked = false;

  buttonName= "Click Here!" ;
  buttonClicked(){
    this.clicked = true;
    this.buttonName = 'Clicked';
  }
  buttonOnMouseOver(){
   console.log('Press the button');

}



  ngOnInit(): void {
  }

}
