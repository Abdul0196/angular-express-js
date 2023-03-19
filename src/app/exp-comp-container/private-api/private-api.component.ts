import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { privateAPi } from './privateApi.service';

@Component({
  selector: 'app-private-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './private-api.component.html',
  styleUrls: ['./private-api.component.css']
})
export class PrivateApiComponent {
  data:any;
  numbers:any;
  text: any = '';
  isadmin: any;
  name: any;


  constructor(private service: privateAPi) {
    this.numbers = Array(501).fill(1).map((x,i)=>i+1);
  }


  getPrivateApi(data:any) {
    //console.log("data is here. ", data)
    this.service.privateAPi(data).subscribe((response:any)=>{
      console.log("response ", response.username)
      console.log("response ", response.token)
      localStorage.setItem('username', response.username)
      localStorage.setItem('token', `${response.token}`)
      this.name = response.username
      this.isadmin = response.isAdmin
  })
    
    // if(data.isAdmin = 1) {
    //    = true
    // }else{
    //   this.isadmin = false
    // }
  }


  callingPrivateApi(){
    this.service.callingPrivateApi().subscribe((response:any)=>{
      this.text = JSON.stringify(response.message)
      
      //console.log("callingPrivateApi resp ", response.isAdmin)
    })
  }
}
