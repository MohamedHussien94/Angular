import { Component, Input, OnInit, Output } from '@angular/core';

interface City {
  value: string;
  viewValue: string;
}

interface Religion {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  
  }

  @Input()fristName:string='';
  @Input()lastName:string='';
  @Input()streetName:string='';

  age:Date;


  @Output()frName:string;
  @Output()lsName:string;
  @Output()strName:string

  Gender: string | undefined;
  seasons: string[] = ['Male', 'Female'];

  selectedCty!: string;

  City: any[] = [
    {value: 'Alex', viewValue: 'Alex'},
    {value: 'Cairo', viewValue: 'Cairo'},
    {value: 'Aswan', viewValue: 'Aswan'},
  ];

  selectedRlg!: string;

  Religion: any[] = [
    {value: 'Muslim', viewValue: 'Muslim'},
    {value: 'Christian', viewValue: 'Christian'},
  ];
  constructor(){
    this.frName=this.fristName;
    this.lsName=this.lastName;
    this.age = new Date();
    this.strName=this.streetName;

  }
  

 
  }
    
  



