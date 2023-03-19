import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostService} from '../compThreeServices/post.service'

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });
  }
}
