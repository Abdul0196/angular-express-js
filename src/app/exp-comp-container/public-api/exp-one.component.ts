import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpApiOne } from './api1.service';

@Component({
  selector: 'app-exp-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exp-one.component.html',
  styleUrls: ['./exp-one.component.css']
})
export class ExpOneComponent implements OnInit {

  data:any;
  numbers:any;
  text: any = '';

  constructor(private service: ExpApiOne){
    this.numbers = Array(501).fill(1).map((x,i)=>i+1);
  }

  

  ngOnInit(): void {
    this.callingApi()
  }

  callingApi(){
    this.service.expApiOne().subscribe((response:any) => {
      this.data = JSON.stringify(response.text)
    }, (error) => {
      console.log("API one response", error)
    })
  }

}
