import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: Object[];
  private http: HttpClient;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    this.http = http;
  }

  private createPost(titleInput: HTMLInputElement){
    let payLoad = {
      title: titleInput.value
    };
    this.http.post(this.url, payLoad).subscribe(response => {
      this.posts.unshift(response);
    });
    titleInput.value = '';
  }

  private updatePost(post){
    let payLoad = {
      title: post.title
    };
    this.http.patch(this.url + '/' + post.id, payLoad).subscribe(response => {
      console.log(response);
    });
  }

  private deletePost(post){
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.posts = response as Object[];
    });
  }

}
