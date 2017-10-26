import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Post } from 'app/models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.scss']
})
export class ElementPageComponent {
  value: string = '';
  busy: Subscription;
  private results: Post[] = [];
  constructor(private apiService: ApiService) {
    this.busy = this.apiService.getPosts().subscribe(data => {
      this.results = data;
    });
  }
  scratch() {
    alert('gtest');
  }
  clear() {

    // this.busy = this.apiService.savePost().subscribe(res => {
    //   console.log(res);
    // });
  }
}
